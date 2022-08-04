const Joi = require('joi');
const { password } = require('./custom.validation');

const createPost = {
  body: Joi.object().keys({
    content: Joi.string().required(),
    image: Joi.string().required(),
    countComment: Joi.number().required(),
  }),
};

module.exports = {
  createPost,
};
