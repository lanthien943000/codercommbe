const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const { body, param } = require("express-validator");
const validators = require("../middlewares/validators");
const {
  createNewPost,
  updateSinglePost,
  getSinglePost,
  getPosts,
  deleteSinglePost,
  getCommentsOfPost,
} = require("../controllers/post.controller");

/**
 * @route GET /posts/user/:userId?page=1&limit=10
 * @description Get all posts an users can see with pagination
 * @access Login required
 */
router.get(
  "/user/:userId",
  validators.validate([
    param("userId").exists().isString().custom(validators.checkObjectId),
  ]),
  getPosts
);

/**
 * @route POST /posts
 * @description Create a new post
 * @body {content, image}
 * @access Login required
 */
router.post(
  "/",
  authentication.loginRequired,
  validators.validate([body("content", "Missing content").exists().notEmpty()]),
  createNewPost
);

/**
 * @route PUT /posts/:id
 * @description Update a post
 * @body {content, image}
 * @access Login required
 */
router.put(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  updateSinglePost
);

/**
 * @route DELETE /posts/:id
 * @description Delete a post
 * @access Login required
 */
router.delete(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  deleteSinglePost
);

/**
 * @route GET /posts/:id
 * @description Get a single post
 * @access Login required
 */
router.get(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  getSinglePost
);

/**
 * @route GET /posts/:id/comments
 * @description Get comments of a post
 * @access Login required
 */
router.get(
  "/:id/comments",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  getCommentsOfPost
);

module.exports = router;
