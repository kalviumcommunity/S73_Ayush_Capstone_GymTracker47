// frontend/src/components/WorkoutForm.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WorkoutForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    reps: '',
    sets: '',
    weight: ''
  });

  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  // Fetch workouts from backend
  const fetchWorkouts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/workouts');
      setWorkouts(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch workouts');
    }
  };

  // On component mount, fetch all workouts
  useEffect(() => {
    fetchWorkouts();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/workouts', formData);
      setFormData({ title: '', reps: '', sets: '', weight: '' });
      setError('');
      fetchWorkouts(); // refresh list
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Failed to add workout');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <h2>Add a Workout 💪</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Exercise" value={formData.title} onChange={handleChange} required />
        <input type="number" name="reps" placeholder="Reps" value={formData.reps} onChange={handleChange} required />
        <input type="number" name="sets" placeholder="Sets" value={formData.sets} onChange={handleChange} required />
        <input type="number" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} />
        <button type="submit">Add Workout</button>
      </form>

      <hr />
      <h3>📋 All Workouts:</h3>
      <ul>
        {workouts.map((w) => (
          <li key={w._id}>
            {w.title} — {w.sets}x{w.reps} @ {w.weight || 0}kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutForm;
