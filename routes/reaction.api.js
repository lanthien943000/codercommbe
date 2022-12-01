const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const { body, param } = require("express-validator");
const validators = require("../middlewares/validators");

const { saveReaction } = require("../controllers/reaction.controller");

/**
 * @route POST /reactions
 * @description Save a reaction to post or comment
 * @body {targetTzype: 'Post' or 'Comment', targetId, emoji: 'like' or 'dislike'}
 * @access Login required
 */
router.post(
  "/",
  authentication.loginRequired,
  validators.validate([
    body("targetType", "Invalid targetType").exists().isIn(["Post", "Comment"]),
    body("targetId", "Invalid targetId")
      .exists()
      .custom(validators.checkObjectId),
    body("emoji", "Invalid emoji").exists().isIn(["like", "dislike"]),
  ]),
  saveReaction
);

module.exports = router;
