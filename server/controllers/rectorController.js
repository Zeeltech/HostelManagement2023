const Rector = require("../models/rectorModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/* SALT */
const salt = bcrypt.genSaltSync(10);

/* REGISTER */
const registerRector = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    let profilePhoto;

    if (req.file) {
      profilePhoto = req.file.filename;
    }

    const rectorExists = await Rector.findOne({ email });

    if (rectorExists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, salt);

    const rectorDoc = await Rector.create({
      name,
      email,
      password: hashedPassword,
      phone,
      profilePhoto,
    });

    return res.status(200).json(rectorDoc);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* LOGIN */
const loginRector = async (req, res) => {
  try {
    const { email, password } = req.body;

    const rectorExists = await Rector.findOne({ email });

    if (!rectorExists) {
      return res.status(404).json({ message: "User does not exists" });
    }

    const decodedPassword = bcrypt.compareSync(password, rectorExists.password);

    if (!decodedPassword) {
      return res.status(401).json({ message: "Wrong credentials" });
    }

    const token = jwt.sign(
      { _id: rectorExists._id },
      process.env.JWT_SECRET,
      {}
    );

    if (!token) {
      return res.status(401).json({ message: "Token is not generated" });
    }

    return res
      .cookie("rectorToken", token, {
        expires: new Date(Date.now() + 86400000),
        sameSite: "none",
        secure: true,
      })
      .status(201)
      .json(rectorExists);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

module.exports = {
  registerRector,
  loginRector,
};
