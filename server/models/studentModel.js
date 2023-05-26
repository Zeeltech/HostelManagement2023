const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
    },
    rollNo: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const StudentModel = mongoose.model("Student", StudentSchema);
module.exports = StudentModel;
