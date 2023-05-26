const mongoose = require("mongoose");

const AccountantSchema = new mongoose.Schema(
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

const AccountantModel = mongoose.model("Accountant", AccountantSchema);
module.exports = AccountantModel;
