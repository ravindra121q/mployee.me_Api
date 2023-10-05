const express = require("express");
const { userModel } = require("../models/userModel");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email } = req.body;
  const userExists = await userModel.findOne({ email });
  if (userExists) {
    return res.status(200).send("User Already Exists");
  }
  try {
    if (name && email) {
      const newUser = new userModel({ name, email });
      await newUser.save();
      return res.status(200).send("Successful user sign-up");
    } else {
      res.status(400).send("Please Add All Details");
    }
  } catch (error) {
    res.send(error);
  }
});

router.post("/api/posts", (req, res) => {
  console.log("Working");
});

module.exports = { router };
