const express = require("express");
const router = express.Router();
const { loginWithEmail } = require("../controllers/auth.controller");
const { body } = require("express-validator");
const validators = require("../middlewares/validators");

/**
 * @route POST /auth/login
 * @description log in with email and password
 * @body {email, password}
 * @access Public
 */
router.post(
  "/login",
  validators.validate([
    body("email", "invalid email")
      .exists()
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password", "invalid password").exists().notEmpty(),
  ]),
  loginWithEmail
);

module.exports = router;
