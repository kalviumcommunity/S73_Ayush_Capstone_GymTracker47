
const Workout = require('../models/workout');


const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ date: -1 }); 
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json({ error: 'Server Error', details: err.message });
  }
};

module.exports = { getAllWorkouts };
