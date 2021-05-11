const User = require("../models/user");
const bcrypt = require("bcryptjs");
const HttpError = require("../models/http-error");
const signUp = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User exists already!" });
    const hashedPassword = bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashedPassword });
  } catch (error) {
    const err = new HttpError(
      "Signing in failed, please try again later.",
      500
    );
    return next(err);
  }
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      res.status(404).json({ message: "User does not exist!" });
    const isPasswordCorrect = bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid user credentials" });
  } catch (error) {
    const err = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(err);
  }
};

exports.signUp = signUp;
exports.signIn = signIn;
