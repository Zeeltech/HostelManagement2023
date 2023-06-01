const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const RollNo = require("../models/rollNoModel");

const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "Student" });
    return res.status(200).json(students);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

const addStudents = async (req, res) => {
  try {
    for (let i = 600; i <= 999; i++) {
      await RollNo.create({
        rollNo: i,
        acquired: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

module.exports = {
  getAllStudents,
  addStudents,
};
