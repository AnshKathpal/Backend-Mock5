const express = require("express");
const router = express.Router();
const User = require("../models/userModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklist = require("../blacklist");

router.post("/signup", async (req, res) => {
  const { email, password, confirm_password } = req.body;
  const newPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      email,
      password: newPassword,
      confirm_password
    });
    res.status(200).send(newUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;