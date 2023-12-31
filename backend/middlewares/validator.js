const config = require("config");
const User = require("../models/user");
const { check, validationResult } = require("express-validator");
const { isValidObjectId } = require("mongoose");

//TASK 3: Validation for the email and password

exports.userValidator = [
  check("email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing!")
    .isLength({ min: 6, max: 20 })
    .withMessage("Password must be at least 6 letters long.")
    .matches(/^(?=.*[A-Z])(?=.*\d).+$/)
    .withMessage(
      "Password must contain at least one capital letter and one number."
    ),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.json({ error: error[0].msg });
  }

  next();
};

exports.signValidator = [
  check("email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
  check("password").trim().not().isEmpty().withMessage("Password is missing!"),
];
