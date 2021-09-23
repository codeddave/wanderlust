const express = require("express");
const userControllers = require("../controllers/userControllers");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", userControllers.signUp);
router.post("/signin", userControllers.signIn);
router.get("/get-user-data", authMiddleware, userControllers.getUserData);

module.exports = router;
