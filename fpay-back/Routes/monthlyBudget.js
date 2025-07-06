const express = require('express');
const router = express.Router();
const MonthlyBudget = require('../Models/MonthlyBudget');

// Get current month's budget
router.get('/current', async (req, res) => {
  const today = new Date();
  const monthKey = today.toLocaleString('default', { month: 'long', year: 'numeric' });

  let budget = await MonthlyBudget.findOne({ month: monthKey });
  res.json({ budget });
});

// Set/Update budget
router.post('/set', async (req, res) => {
  const { amount } = req.body;
  const today = new Date();
  const monthKey = today.toLocaleString('default', { month: 'long', year: 'numeric' });

  let budget = await MonthlyBudget.findOneAndUpdate(
    { month: monthKey },
    { $set: { amount } },
    { upsert: true, new: true }
  );
  res.json({ Status: 'Success', budget });
});

module.exports = router;
