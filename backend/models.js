import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Employee', 'Admin'], default: 'Employee' },
  employeeId: { type: String, unique: true }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);


const attendanceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: String, required: true },
  checkIn: { type: String },
  checkOut: { type: String },
  status: { type: String, enum: ['Present', 'Absent', 'Leave', 'Half-day'], default: 'Present' }
});

export const Attendance = mongoose.model('Attendance', attendanceSchema);


const leaveSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  leaveType: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  remarks: { type: String },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }
}, { timestamps: true });

export const Leave = mongoose.model('Leave', leaveSchema);