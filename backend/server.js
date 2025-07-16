const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const workoutRoutes = require('./routes/WorkoutRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/workouts', workoutRoutes);

// DB connection
const startServer = async () => {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI not defined in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

startServer();
