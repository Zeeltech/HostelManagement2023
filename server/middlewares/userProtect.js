const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protectUser = async (req, res, next) => {
  try {
    const _token = req.cookies._token;

    if (!_token) {
      return res.status(401).json({ message: "Token does not exists" });
    }

    const verifiedUser = jwt.verify(_token, process.env.JWT_SECRET);

    root_user = await User.findOne({
      _id: verifiedUser._id,
    });

    req.user = root_user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Authorization failed" });
  }
};

module.exports = { protectUser };
