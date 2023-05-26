const mongoose = require("mongoose");

const RectorSchema = new mongoose.Schema(
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
  },
  { timestamps: true, versionKey: false }
);

const RectorModel = mongoose.model("Rector", RectorSchema);
module.exports = RectorModel;
