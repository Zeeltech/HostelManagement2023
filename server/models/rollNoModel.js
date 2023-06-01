const mongoose = require("mongoose");

const RollNoSchema = new mongoose.Schema(
  {
    rollNo: {
      type: String,
      required: true,
    },
    acquired: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const RollNoModel = mongoose.model("RollNo", RollNoSchema);
module.exports = RollNoModel;
