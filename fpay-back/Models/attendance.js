// models/attendance.js
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee' // Assuming 'Employee' is the model for employees
  },
  date: String,
  status: String
});

module.exports = mongoose.model('Attendance', attendanceSchema);
