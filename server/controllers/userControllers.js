const User = require("../models/user");
const bcrypt = require("bcryptjs");
const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");

const signUp = async (req, res, next) => {
  const { email, name, password } = req.body;
  console.log(req.body);
  console.log(email);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User exists already!" });
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1hr" }
    );
    console.log(user + "uhdvdibadbkbjk b");
    res.status(200).json({ user, token });
  } catch (error) {
    const err = new HttpError(
      "Signing up failed, please try again later.",
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
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid user credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user: existingUser, token });
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
