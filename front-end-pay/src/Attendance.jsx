import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Attendance = () => {
    const navigate=useNavigate()
    const [employeeId,setEmplpoyeeId]=useState("")
    const [date,setDate]=useState("")
    const [status,setStatus]=useState("")
    const [error,setError]=useState("")
    const handelSubmit=async(e)=>{
        e.preventDefault();
 
        axios
        .post(`https://fpay-back.onrender.com/api/v1/attendance`, { employeeId, date, status })
        .then((res) => {
            if(res.data.Status=="Error"){
                return setError(res.data.Error)
            }
          navigate('/dashboard/history');
        })
        .catch((err) => console.log(err));
    }

  return (
    <div>
        <div className="attantance  w-25 justify-content-center align-align-items-center py-5 gap-2 h-50  m-auto  d-flex flex-column">
            {error && error}
            <h2 className='text-text-center'>Attendance</h2>
            <label htmlFor="id">Employee Id</label>
            <input type="text"  id='id' placeholder='Enter the Employe ID'  onChange={(e)=>setEmplpoyeeId(e.target.value)}/>
            <label htmlFor="month">Enter the Date</label>
            <input type="date" onChange={(e)=>setDate(e.target.value)}  id='month' placeholder='Enter the month' />
<label htmlFor="leaves">Enter The Status</label>
<select
            className="form-control"
            id="leaves"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Status</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
            <button onClick={(e)=>handelSubmit(e)} className="btn btn-primary my-2">Mark</button>
        </div>
    </div>
  )
}

export default Attendance