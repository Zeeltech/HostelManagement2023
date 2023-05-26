const jwt = require("jsonwebtoken");
const Accountant = require("../models/accountantModel");

const protectAccountant = async (req, res, next) => {
  try {
    const accountantToken = req.cookies.accountantToken;

    if (!accountantToken) {
      return res.status(401).json({ message: "Token does not exists" });
    }

    const verifiedAccountant = jwt.verify(
      accountantToken,
      process.env.JWT_SECRET
    );

    root_user = await Accountant.findOne({
      _id: verifiedAccountant._id,
    });

    req.user = root_user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Authorization failed" });
  }
};

module.exports = { protectAccountant };
