const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const postRoute = require('./post.route');

const router = express.Router();


const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/friends',
    route: userRoute,
  },
  {
    path: '/posts',
    route: postRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

// /* istanbul ignore next */
// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

devRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
