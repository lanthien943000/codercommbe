const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const { body, param } = require("express-validator");
const validators = require("../middlewares/validators");
const {
  createNewComment,
  updateSingleComment,
  deleteSingleComment,
  getSingleComment,
} = require("../controllers/comment.controller");

/**
 * @route POST /comments
 * @description Create a new comment
 * @body {content, postId}
 * @access Login required
 */
router.post(
  "/",
  authentication.loginRequired,
  validators.validate([
    body("content", "Missing content").exists().notEmpty(),
    body("postId", "Missing postId")
      .exists()
      .isString()
      .custom(validators.checkObjectId),
  ]),
  createNewComment
);

/**
 * @route PUT /comments/:id
 * @description Update a comment
 * @access Login required
 */
router.put(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
    body("content", "Missing content").exists().notEmpty(),
  ]),
  updateSingleComment
);

/**
 * @route DELETE /comments/:id
 * @description Delete a comment
 * @access Login required
 */
router.delete(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  deleteSingleComment
);

/**
 * @route GET /comments/:id
 * @description Get details of a comment
 * @access Login required
 */
router.get(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  getSingleComment
);

module.exports = router;
