const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
  nameOfExercise: String,
  description: String,
 
});

const Exercises = model("Exercises", exerciseSchema);

module.exports = Exercises;
