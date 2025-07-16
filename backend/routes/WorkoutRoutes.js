
const express = require('express');
const router = express.Router();

const { getAllWorkouts } = require('../controllers/WorkoutController');


router.get('/', getAllWorkouts);

module.exports = router;
