const Post = require("../models/post");
const mongoose = require("mongoose");
const { findById } = require("../models/post");
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
  const newPost = new Post(post);
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
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No post with that id");
    }
  } catch (error) {
    console.log(error.message);
  }
  const post = await Post.findById(_id);
  try {
    const likedPost = await Post.findByIdAndUpdate(
      _id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );
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
