const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  nameOfWorkout: String,
  exercises: String,
 
});

const Workouts = model("Workouts", workoutSchema);

module.exports = Workouts;
