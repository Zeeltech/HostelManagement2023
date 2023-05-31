const express = require("express");

/* ROUTER */
const router = express.Router();

/* ALL FUNCTIONS */
const {
  addNotice,
  editNotice,
  getAllNotices,
  deleteNotice,
  getNotice,
} = require("../controllers/noticeController");

/* APIs */
router.post("/add-notice", addNotice);
router.put("/edit-notice/:id", editNotice);
router.get("/get-notices", getAllNotices);
router.delete("/delete-notice/:id", deleteNotice);
router.get("/get-notice/:id",getNotice)

module.exports = router;
