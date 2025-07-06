import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Employee() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 20;

  useEffect(() => {
    axios.get('https://fpay-back.onrender.com/api/v1/getEmployee')
      .then(res => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        } else {
          alert("Error loading employees");
        }
      })
      .catch(err => console.log(err));
  }, []);
  
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (!confirmDelete) return;
  
    axios.delete(`https://fpay-back.onrender.com/api/v1/delete/${id}`)
      .then(res => {
        if (res.data.Status === "Success") {
          setData(prev => prev.filter(emp => emp._id !== id));
        } else {
          alert("Delete error");
        }
      })
      .catch(err => console.log(err));
  };
  

  // ✅ Filter employees by name
  const filteredEmployees = data.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalEmployees = filteredEmployees.length;
  const totalPages = Math.ceil(totalEmployees / employeesPerPage);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-between align-items-center flex-wrap'>
        <h3>Employee List</h3>
        <span className='badge bg-primary'>Total: {totalEmployees}</span>
        <Link to="/dashboard/create" className='btn btn-success'>Add Employee</Link>
      </div>

      <div className='mt-3 mb-3'>
        <input
          type="text"
          placeholder="Search by name..."
          className="form-control"
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // reset to first page on search
          }}
        />
      </div>

      <table className='table table-bordered table-hover'>
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.length === 0 ? (
            <tr>
              <td colSpan="6" className='text-center'>No employees found.</td>
            </tr>
          ) : (
            currentEmployees.map((employee, index) => (
              <tr key={employee._id}>
                <td>{indexOfFirstEmployee + index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.designation}</td>
                <td>{employee.fixedctc}</td>
                <td>
                  <Link to={`/dashboard/employeeEdit/${employee._id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                  <button onClick={() => handleDelete(employee._id)} className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className='d-flex justify-content-center gap-2'>
        <button
          className='btn btn-outline-secondary btn-sm'
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >Prev</button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`btn btn-sm ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => setCurrentPage(i + 1)}
          >{i + 1}</button>
        ))}

        <button
          className='btn btn-outline-secondary btn-sm'
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >Next</button>
      </div>
    </div>
  );
}

export default Employee;
