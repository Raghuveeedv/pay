import axios from 'axios'
import React, { useEffect, useState } from 'react'

const History = () => {
    const [attendances,setAttendances]=useState([])
    useEffect(()=>{
        axios.get("https://fpay-back.onrender.com/api/v1/attendances").then(res=>{
            setAttendances(res.data.attendances)
        })
    },[])
  return (
    <div className='w-75 m-auto py-5'>
        <h2>History</h2>
        <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Hisotry Id</th>
              <th>Empolyee Id</th>
              <th>Date</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>
            {attendances.map((attendance, index) => {
              return <tr key={index}>
<td>{attendance._id}</td>
                  <td>{attendance.employeeId}</td>
                  
                  <td>{attendance.date}</td>
                  <td   style={attendance.status=="present"?{color:"green",fontWeight:"bold"}:{color:"red",fontWeight:"bold"}}>{attendance.status}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default History