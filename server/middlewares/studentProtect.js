const jwt = require("jsonwebtoken");
const Student = require("../models/StudentModel");

const protectStudent = async (req, res, next) => {
  try {
    const studentToken = req.cookies.studentToken;

    if (!token) {
      res.status(401).json({ message: "Token does not exists" });
    }

    const verifiedStudent = jwt.verify(studentToken, process.env.JWT_SECRET);

    root_user = await Student.findOne({
      _id: verifiedStudent._id,
    });

    req.user = root_user;
  } catch (error) {
    res.status(401).json({ message: "Authorization failed" });
  }
};

module.exports = { protectStudent };
