const mongoose = require('mongoose');

const MonthlyBudgetSchema = new mongoose.Schema({
  month: String, // e.g., "April 2025"
  amount: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('MonthlyBudget', MonthlyBudgetSchema);
