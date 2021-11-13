const express = require("express");

const userControllers = require("../controllers/userControllers");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/get-user-data", authMiddleware, userControllers.getUserData);
router.post("/signup", userControllers.signUp);
router.post("/signin", userControllers.signIn);

module.exports = router;
