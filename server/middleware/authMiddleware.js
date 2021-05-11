const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

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
