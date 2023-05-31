const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const NoticeModel = mongoose.model("Notice", NoticeSchema);
module.exports = NoticeModel;
