const Meal = require("../models/mealModel");

/* ADD MEAL */
const addMeal = async (req, res) => {
  try {
    const { breakfast, lunch, dinner, date } = req.body;

    const mealExists = await Meal.findOne({ date });

    if (mealExists) {
      return res.status(409).json({ message: "Meal already exists" });
    }

    const mealDoc = await Meal.create({
      breakfast,
      lunch,
      dinner,
      date,
    });

    return res.status(200).json(mealDoc);
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* GET ALL MEALS */
const getMeals = async (req, res) => {
  try {
    const mealIteams = await Meal.find({})
      .populate("breakfast")
      .populate("lunch")
      .populate("dinner");
    if (mealIteams) {
      return res.status(200).json(mealIteams);
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* EDIT MEAL */
const editMeal = async (req, res) => {
  try {
    const { id } = req.params;
    const { breakfast, lunch, dinner } = req.body;

    const mealDoc = await Meal.findById(id);

    if (!mealDoc) {
      return res.status(404).json({ message: "Meal does not exists" });
    }

    await mealDoc.set({
      breakfast,
      lunch,
      dinner,
    });
    await mealDoc.save();
    res.status(200).json(mealDoc);

  } catch (error) {
    console.log(error);
    return res.json({ message: `Error occured ${error}` });
  }
};

/* DELETE MEAL */
const deleteMeal = async (req,res) => {
    try {
        const {id} = req.params;
        const mealDoc = await Meal.findById(id);

        if(!mealDoc){
            return res.status(404).json({ message: "Meal does not exists" });
        }

        console.log(mealDoc);
        await Meal.deleteOne({ _id: id });
        return res.status(200).json({message: "Meal deleted"})


    } catch (error) {
        console.log(error);
    return res.json({ message: `Error occured ${error}` });
    }
}

module.exports = {
  addMeal,
  getMeals,
  editMeal,
  deleteMeal
};
