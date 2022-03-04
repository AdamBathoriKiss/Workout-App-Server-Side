const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  ownWorkout: [{ type: Schema.Types.ObjectId, ref: 'Workouts' }]
});

const User = model("User", userSchema);

module.exports = User;
