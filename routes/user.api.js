const express = require("express");
const router = express.Router();
const {
  register,
  getUsers,
  getCurrentUser,
  getSingleUser,
  updateProfile,
} = require("../controllers/user.controller");
const { body, param } = require("express-validator");
const validators = require("../middlewares/validators");
const authentication = require("../middlewares/authentication");

/**
 * @route POST /users
 * @description register new user
 * @body {name, email, password}
 * @access Public
 */
router.post(
  "/",
  validators.validate([
    body("name", "invalid name").exists().notEmpty(),
    body("email", "invalid email")
      .exists()
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password", "invalid password").exists().notEmpty(),
  ]),
  register
);

/**
 * @route GET /users?page=1&limit=10
 * @description get users with pagination
 * @access Login required
 */
router.get("/", authentication.loginRequired, getUsers);

/**
 * @route GET /users/me
 * @description get current user info
 * @access Login required
 */
router.get("/me", authentication.loginRequired, getCurrentUser);

/**
 * @route GET /users/:id
 * @description get a user profile
 * @access Login required
 */
router.get(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  getSingleUser
);

/**
 * @route PUT /users/:id
 * @description update user profile
 * @body {name, avatarUrl, coverUrl, aboutMe, city, country, company, jobTitle, facebookLink, instagramLink, linkedLink, twitterLink}
 * @access Login required
 */
router.put(
  "/:id",
  authentication.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  updateProfile
);

module.exports = router;
