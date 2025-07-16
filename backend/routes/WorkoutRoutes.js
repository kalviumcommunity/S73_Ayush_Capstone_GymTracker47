const express = require('express');
const router = express.Router();

const { getAllWorkouts, createWorkout } = require('../controllers/WorkoutController');

// GET all workouts
router.get('/', getAllWorkouts);

// POST a new workout
router.post('/', createWorkout);

module.exports = router;
