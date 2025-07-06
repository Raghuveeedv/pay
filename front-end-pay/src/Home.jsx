import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
  const [employeeData, setEmployeeData] = useState([]);
  const budget = 1900000;

  useEffect(() => {
    axios.get('https://fpay-back.onrender.com/api/v1/getEmployee')
      .then(res => {
        if (res.data.Status === 'Success') {
          setEmployeeData(res.data.Result);
        }
      })
      .catch(err => console.log(err));
  }, []);
  

  const employeeCount = employeeData.length;
  const totalSalary = employeeData.reduce((sum, emp) => sum + parseFloat(emp.fixedctc || 0), 0);
  const remaining = Math.max(budget - totalSalary, 0);

  const doughnutData = {
    labels: ['Remaining Budget', 'Salary Paid'],
    datasets: [
      {
        backgroundColor: ['#00A6B4', '#FF6384'],
        data: [remaining, totalSalary],
      },
    ],
  };

  const formatINR = num =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(num);

  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3 flex-wrap gap-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm' style={{ minWidth: '250px' }}>
          <h4 className='text-center'>Budget</h4>
          <hr />
          <h5>Total: {formatINR(budget)}</h5>
        </div>

        <div className='px-3 pt-2 pb-3 border shadow-sm' style={{ minWidth: '250px' }}>
          <h4 className='text-center'>Employees</h4>
          <hr />
          <h5>Total: {employeeCount}</h5>
        </div>

        <div className='px-3 pt-2 pb-3 border shadow-sm' style={{ minWidth: '250px' }}>
          <h4 className='text-center'>Salary Paid</h4>
          <hr />
          <h5>Total: {formatINR(totalSalary)}</h5>
        </div>
      </div>

      <div className='py-4 d-flex flex-column align-items-center'>
        <div style={{ width: '40%', maxWidth: '400px' }}>
          <Doughnut data={doughnutData} />
        </div>
        <div className='mt-4'>
          {totalSalary > budget ? (
            <div className='alert alert-danger text-center'>⚠️ Salary exceeds budget!</div>
          ) : (
            <div className='alert alert-success text-center'>
              ✅ Within budget. Remaining: {formatINR(remaining)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
