const express = require("express");
const postsControllers = require("../controllers/postsControllers");
const router = express.Router();

router.get("/", postsControllers.getPosts);
router.post("/", postsControllers.createPost);
router.patch("/:id", postsControllers.updatePost);
router.delete("/:id", postsControllers.deletePost);
router.patch("/:id/likePost", postsControllers.likePost);
module.exports = router;
