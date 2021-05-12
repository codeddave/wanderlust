const express = require("express");
const postsControllers = require("../controllers/postsControllers");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", postsControllers.getPosts);
router.post("/", authMiddleware, postsControllers.createPost);
router.patch("/:id", authMiddleware, postsControllers.updatePost);
router.delete("/:id", authMiddleware, postsControllers.deletePost);
router.patch("/:id/likePost", authMiddleware, postsControllers.likePost);
module.exports = router;
