const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: false,
    },
    countComment: {
      type: Number,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Post
 */
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
