const express = require("express");
const userControllers = require("../controllers/userControllers");
const router = express.Router();

router.post("/signup", userControllers.signUp);
router.post("/signIn", userControllers.signIn);

module.exports = router;
