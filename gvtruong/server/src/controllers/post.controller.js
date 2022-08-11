const catchAsync = require('../utils/catchAsync');
const {Post} = require("../models");


const getPosts = catchAsync(async (req, res) => {
  const result = await Post.find({})
  res.send(result);
});


const createPost = catchAsync(async (req, res) => {
  const post = await Post.create(req.body)
  res.status(200).json(post);
})
module.exports = {
  getPosts,
  createPost,
};
