const Report = require("../models/reportModel");
const User = require("../models/userModel");
const fs = require("fs");
const path = require("path");

/*ADD REPORT */
const addReport = async (req, res) => {
  try {
    const { title, description, authorId } = req.body;

    let reportPhoto;

    if (req.file) {
      reportPhoto = req.file.filename;
    }

    const reportExists = await Report.findOne({ title });

    if (reportExists) {
      return res.status(409).json({ message: "Report already exists" });
    }

    const reportDoc = await Report.create({
      title,
      description,
      author: authorId,
      photo: reportPhoto,
    });

    return res.status(200).json(reportDoc);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* STUDENT CAN GET OWN REPORT */
const getReport = async (req, res) => {
  try {
    const { userId } = req.body;

    const reportDoc = await Report.find({ author: userId });
    if (reportDoc) {
      return res.status(200).json(reportDoc);
    }
    
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

module.exports = {
  addReport,
  getReport,
};
