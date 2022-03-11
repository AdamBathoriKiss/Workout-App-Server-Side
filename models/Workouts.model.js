const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  nameOfWorkout:  { type: String, required: true },
  user: String,
  exercises:  String,
  numberOfReps: Number,
  sets: Number
});

const Workouts = model("Workouts", workoutSchema);

module.exports = Workouts;
