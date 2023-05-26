const Student = require("../models/studentModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/* SALT */
const salt = bcrypt.genSaltSync(10);

/* REGISTER */
const registerStudent = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    let profilePhoto;

    if (req.file) {
      profilePhoto = req.file.filename;
    }

    const studentExists = await Student.findOne({ email });

    if (studentExists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, salt);

    const studentDoc = await Student.create({
      name,
      email,
      password: hashedPassword,
      phone,
      profilePhoto,
    });

    return res.status(200).json(studentDoc);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* LOGIN */
const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    const studentExists = await Student.findOne({ email });

    if (!studentExists) {
      return res.status(404).json({ message: "User does not exists" });
    }

    const decodedPassword = bcrypt.compareSync(
      password,
      studentExists.password
    );

    if (!decodedPassword) {
      return res.status(401).json({ message: "Wrong credentials" });
    }

    const token = jwt.sign(
      { _id: studentExists._id },
      process.env.JWT_SECRET,
      {}
    );

    if (!token) {
      return res.status(401).json({ message: "Token is not generated" });
    }

    return res
      .cookie("studentToken", token, {
        expires: new Date(Date.now() + 86400000),
        sameSite: "none",
        secure: true,
      })
      .status(201)
      .json(studentExists);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

module.exports = {
  registerStudent,
  loginStudent,
};
