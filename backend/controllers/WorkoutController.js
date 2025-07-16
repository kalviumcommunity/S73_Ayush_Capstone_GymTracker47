const Workout = require('../models/workout');

// GET API - fetch all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}); 
    console.log('Fetched workouts:', workouts);
    return res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json({ error: 'Server Error', details: err.message });
    console.log(err);
  }
};

// POST API - add a new workout
const createWorkout = async (req, res) => {
  const { title, reps, sets, weight } = req.body;

  // Simple validation
  if (!title || !reps || !sets) {
    return res.status(400).json({ error: 'Title, reps, and sets are required' });
  }

  try {
    const newWorkout = new Workout({ title, reps, sets, weight });
    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server Error', details: err.message });
  }
};

module.exports = {
  getAllWorkouts,
  createWorkout
};
