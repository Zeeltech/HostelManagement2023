const express = require("express");

/* ROUTER */
const router = express.Router();

/* ALL FUNCTIONS */
const {
  addMeal,
  getMeals,
  editMeal,
  deleteMeal,
} = require("../controllers/mealController");

/* APIs */
router.post("/add-meal", addMeal);
router.get("/get-meals", getMeals);
router.put("/edit-meal/:id", editMeal);
router.delete("/delete-meal/:id",deleteMeal)

module.exports = router;
