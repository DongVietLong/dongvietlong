const express = require('express');
const postController = require('../../controllers/post.controller');
const validate = require("../../middlewares/validate");
const postValidation = require("../../validations/post.validation");

const router = express.Router();

router
  .route('/')
  .get(postController.getPosts)
  .post(validate(postValidation.createPost), postController.createPost)
module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Post management and retrieval
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     description:  retrieve all posts.
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "201":
 *         description: Successfully retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 *                 posts:
 *                   $ref: '#/components/schemas/Post'
 */


/**
 * @swagger
 * /posts:
 *   post:
 *     summary: creat a post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *               - file
 *               - countComment
 *             properties:
 *               content:
 *                 type: string
 *               countComment:
 *                 type: number
 *             example:
 *               content: fake name
 *               countComment: 100
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 posts:
 *                   $ref: '#/components/schemas/Post'
 */
