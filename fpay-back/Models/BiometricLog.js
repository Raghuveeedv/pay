const mongoose = require('mongoose');

const biometricLogSchema = new mongoose.Schema({
  empCode: String,
  name: String,
  date: Date,
  inTime: String,
  outTime: String,
  hoursWorked: Number
});

module.exports = mongoose.model('BiometricLog', biometricLogSchema);
