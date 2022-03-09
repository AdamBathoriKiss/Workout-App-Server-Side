const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  nameOfWorkout:  { type: String, required: true },
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  exercises:  [{ type: Schema.Types.ObjectId, ref: 'Exercises' }],
  
});

const Workouts = model("Workouts", workoutSchema);

module.exports = Workouts;
