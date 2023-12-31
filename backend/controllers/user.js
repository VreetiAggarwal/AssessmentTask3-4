const User = require("../models/user");
const config = require("config");
require("dotenv").config();

const nodemailer = require("nodemailer");

//For Creating user through testing application
exports.CreateUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(401).json({ error: "Email already in use." });

    user = new User({ email, password });

    await user.save();
    res.json({ user: user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

//For Sign-In to check if the user is valid
exports.sign = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    if (password !== user.password) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    const { _id } = user;

    res.json({ user: { id: _id, email } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

//Sending Email using Nodemailer
exports.email = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    const user = await User.findOne({ email });
    if (!user) {
      console.log(user);
      console.error("email not in database");
      res.status(403).send("email not in db");
    } else {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "vreetiagg@gmail.com",
          pass: "dubc mzrq ypnl gpsr",
        },
      });

      const mailOptions = {
        from: "mySqlDemoEmail@gmail.com",
        to: `${user.email}`,
        subject: "Link To Reset Password",
        text:
          "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
          "Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n" +
          "If you did not request this, please ignore this email and your password will remain unchanged.\n",
      };

      console.log("sending mail");

      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          console.error("there was an error: ", err);
        } else {
          res.status(200).json("recovery email sent");
        }
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.displayUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(401).json({ msg: "User not found!" });

    res.json({ user: user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
