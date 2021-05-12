const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    if (!token)
      return next(new HttpError("Not authorized to access this route", 401));
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.verify(token);

      req.userId = decodedData?.sub; //for google; differentiates users by this id
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
