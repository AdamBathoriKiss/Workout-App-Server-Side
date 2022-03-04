const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  nameOfWorkout: String,
  exercises:  [{ type: Schema.Types.ObjectId, ref: 'Exercises' }]
 
});

const Workouts = model("Workouts", workoutSchema);

module.exports = Workouts;
