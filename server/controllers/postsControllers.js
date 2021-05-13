const Post = require("../models/post");
const mongoose = require("mongoose");
const { findById } = require("../models/post");
const HttpError = require("../models/http-error");
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No post with that id");
    }

    const updatedPost = await Post.findByIdAndUpdate(
      _id,
      { ...post, _id },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    console.log(error.message);
  }
};
const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  let placeToRemove;
  try {
    placeToRemove = await Post.findById(_id);
  } catch (error) {
    console.log(error.message);
  }
  try {
    placeToRemove.remove();
  } catch (error) {
    console.log(error.message);
  }
  res.status(200).json({ message: "post deleted successfully" });
};

const likePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!req.userId) return next(new HttpError("User unauthenticated", 400));
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No post with that id");
    }
  } catch (error) {
    console.log(error.message);
  }
  const post = await Post.findById(_id);
  const index = post.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    //like the post
    post.likes.push(req.userId);
  } else {
    //dislike post
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }
  try {
    const likedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
    res.json(likedPost);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getPosts = getPosts;
exports.createPost = createPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
exports.likePost = likePost;
