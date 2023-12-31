const express = require("express");
const { CreateUser, sign, displayUser, email } = require("../controllers/user");
const {
  userValidator,
  validate,
  signValidator,
} = require("../middlewares/validator");

const router = express.Router();

//routes
router.post("/create", userValidator, validate, CreateUser);
router.post("/sign", signValidator, validate, sign);
router.post("/forgotPassword", email);

module.exports = router;
