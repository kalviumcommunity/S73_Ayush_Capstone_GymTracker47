
const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
  weight: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const workout = mongoose.model('Workout', workoutSchema);

module.exports = workout;
