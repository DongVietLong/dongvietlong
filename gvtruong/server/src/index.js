const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const Grid = require("gridfs-stream");
const path = require("path");
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");
const {printRoute} = require("./utils/print");
const auth = require("./middlewares/auth");
const ApiError = require("./utils/ApiError");
const httpStatus = require("http-status");
const crypto = require('crypto')
const {updateUserById} = require("./services/user.service");
const {backendURL} = require("./config/config");

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(async (conn) => {

  // create a stream connection with our cluster
  const gfs = new Grid(conn.connection.db, conn.mongo)

  //name of the bucket where media is going to be retrieved
  gfs.collection('media')

  // specifying a storage location in our cluster for multer
  const storage = new GridFsStorage({
    db: conn.connection.db,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename =
            buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename,
            bucketName: 'media'
          };
          return resolve(fileInfo);
        });
      });
    }
  });

  // initializing our multer storage
  const upload = multer({storage});

  // route for uploading a file
  app.post('/v1/media/upload', auth(), upload.single('file'),async (req, res) => {
    console.log('show req,',req.query)
    if(req.query.type === 'avatar' || req.query.type === 'background'){
      await updateUserById(req.user.id, {
        [req.query.type]: `${backendURL}/v1/media/${req.file.filename}`
      })
    }
    res.json(req.file)
  })

  // route for fetching all the files from the media bucket
  app.get('/v1/media/files', auth(), async (req, res) => {
    try {
      const files = await gfs.files.find().toArray()

      res.json(files)

    } catch (err) {
      res.status(400).send(err)
    }

  })

  // route for streaming a file
  app.get('/v1/media/:filename', auth(), async (req, res) => {

    const {filename} = req.params
    try {
      const readStream = await gfs.createReadStream({filename})

      readStream.pipe(res)
    } catch (err) {
      res.status(400).send(err)
    }

  })

  // route for deleting a file
  app.delete('/delete/:filename', auth(), async (req, res) => {
    const {filename} = req.params
    try {

      await gfs.files.remove({filename})

      res.status(200).end()
    } catch (err) {
      res.status(400).send(err)
    }
  })

  app._router.stack.forEach(printRoute.bind(null, []))

  // send back a 404 error for any unknown api request
  app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
  });

  logger.info('Connected to MongoDB');
  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
