const Accountant = require("../models/accountantModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/* SALT */
const salt = bcrypt.genSaltSync(10);

/* REGISTER */
const registerAccountant = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    let profilePhoto;

    if (req.file) {
      profilePhoto = req.file.filename;
    }

    const accountantExists = await Accountant.findOne({ email });

    if (accountantExists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, salt);

    const accountantDoc = await Accountant.create({
      name,
      email,
      password: hashedPassword,
      phone,
      profilePhoto,
    });

    return res.status(200).json(accountantDoc);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* LOGIN */
const loginAccountant = async (req, res) => {
  try {
    const { email, password } = req.body;

    const accountantExists = await Accountant.findOne({ email });

    if (!accountantExists) {
      return res.status(404).json({ message: "User does not exists" });
    }

    const decodedPassword = bcrypt.compareSync(
      password,
      accountantExists.password
    );

    if (!decodedPassword) {
      return res.status(401).json({ message: "Wrong credentials" });
    }

    const token = jwt.sign(
      { _id: accountantExists._id },
      process.env.JWT_SECRET,
      {}
    );

    if (!token) {
      return res.status(401).json({ message: "Token is not generated" });
    }

    return res
      .cookie("accountantToken", token, {
        expires: new Date(Date.now() + 86400000),
        sameSite: "none",
        secure: true,
      })
      .status(201)
      .json(accountantExists);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

module.exports = {
  registerAccountant,
  loginAccountant,
};
