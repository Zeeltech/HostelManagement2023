const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

/* ROUTER */
const router = express.Router();

/* ALL FUNCTIONS */
const {
  getAllStudents,
  addStudents,
} = require("../controllers/accountantController");
const { protectUser } = require("../middlewares/userProtect");

/* MULTER CONFIGURATIONS */

/* APIs */
router.get(
  "/all-students",
  (req, res, next) => protectUser(req, res, next, "Accountant"),
  getAllStudents
);

router.get(
  "/addStudents",
  (req, res, next) => protectUser(req, res, next, "Accountant"),
  addStudents
);

module.exports = router;
