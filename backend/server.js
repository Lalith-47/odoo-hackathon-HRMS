import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { User, Attendance, Leave } from './models.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const MONGO_URI = 'mongodb://127.0.0.1:27017/dayflow';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// --- API ROUTES ---

// 1. Register / Sign Up
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const employeeId = 'EMP-' + Math.floor(1000 + Math.random() * 9000);
    
    const newUser = new User({ name, email, password, role, employeeId });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Login / Sign In
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
    
    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Submit Leave Request
app.post('/api/leaves', async (req, res) => {
  try {
    const newLeave = new Leave(req.body);
    await newLeave.save();
    res.status(201).json({ message: 'Leave request submitted', leave: newLeave });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Get All Leaves (For Admin panel)
app.get('/api/leaves', async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.json(leaves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Update Leave Status (Approve/Reject)
app.put('/api/leaves/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const updatedLeave = await Leave.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json({ message: 'Leave status updated', leave: updatedLeave });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});