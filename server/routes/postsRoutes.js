const express = require("express");
const postsControllers = require("../controllers/postsControllers");
const router = express.Router();

router.get("/", postsControllers.getPosts);
router.post("/", postsControllers.createPosts);

module.exports = router;
