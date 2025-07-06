import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Budget() {
  const [budget, setBudget] = useState(0);
  const [newBudget, setNewBudget] = useState('');

  useEffect(() => {
    axios.get('https://fpay-back.onrender.com/api/v1/monthlybudget/current')
      .then(res => {
        if (res.data.budget) {
          setBudget(res.data.budget.amount);
        }
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://fpay-back.onrender.com/api/v1/monthlybudget/set', { amount: newBudget })
      .then(res => {
        if (res.data.Status === "Success") {
          setBudget(res.data.budget.amount);
          setNewBudget('');
          alert("Budget updated!");
        }
      });
  };

  return (
    <div className="container mt-4">
      <h4>Monthly Budget (Admin Panel)</h4>
      <p><strong>Current Budget:</strong> ₹{budget}</p>

      <form onSubmit={handleSubmit} className='d-flex gap-2'>
        <input
          type="number"
          placeholder="Enter new budget"
          className="form-control"
          value={newBudget}
          onChange={(e) => setNewBudget(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Set Budget</button>
      </form>
    </div>
  );
}

export default Budget;
