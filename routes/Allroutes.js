const express = require("express");
const { userModel } = require("../models/userModel");
const { postModel } = require("../models/postModel");
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

router.post("/posts", async (req, res) => {
  const { userId, content } = req.body;
  try {
    if (userId && content) {
      const newPost = new postModel({ userId, content });
      await newPost.save();
      return res.status(200).send("Successfully created");
    } else {
      res.status(400).send("Missing Information");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/deletepost/:postId", async (req, res) => {
  const { postId } = req.params;
  try {
    postIdExists = await postModel.findOne({ _id: postId });
    if (postIdExists) {
      await postModel.findByIdAndDelete(postId);
      return res.send(200).send("Successful post deletion");
    } else {
      res.send(200).send("PostID Not Exists");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/posts/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const userIdExists = await postModel.findOne({ userId });
    if (userIdExists) {
      const userPosts = await postModel.find({ userId });
      return res.status(200).send(userPosts);
    } else {
      res.status(200).send("UserID Does Not Exists");
    }
  } catch (error) {
    res.send(400).send(error);
  }
});

module.exports = { router };
