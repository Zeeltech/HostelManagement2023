const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

/* ROUTER */
const router = express.Router();

/* ALL FUNCTIONS */
const {
  addFood,
  getFoods,
  deleteFood,
  editFood,
} = require("../controllers/foodController");

/* MULTER CONFIGURATIONS */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("uploadsFood")) {
      fs.mkdirSync("uploadsFood");
    }
    cb(null, "uploadsFood");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

/* APIs */
router.post("/add-food", upload.single("foodPhotoName"), addFood);
router.get("/get-foods", getFoods);
router.put("/edit-food/:id", upload.single("foodPhotoName"),editFood);
router.delete("/delete-food/:id", deleteFood);

module.exports = router;
