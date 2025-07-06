import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_ENDPOINTS, getApiUrl } from './config';

function EmployeeDetail() {
  const pdfRef = useRef()
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  const [attendances, setAttendances] = useState([]);
  const [attendanceDataFetched, setAttendanceDataFetched] = useState(false);
  const handleDownloadPdf = async (address = null) => {
    try {
      let url = getApiUrl(API_ENDPOINTS.DOWNLOAD_PDF, id);
      if (address) {
        url += `?address=${address}`;
      }
      
      const response = await axios.get(url, {
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', `Employee_Pay_Slip_${address || 'default'}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download error:", error);
    }
  };
  
  useEffect(() => {
    axios.get(getApiUrl(API_ENDPOINTS.GET_EMPLOYEE, id))
      .then(res => {
        setEmployee(res.data.Result);
        axios.get(`${API_ENDPOINTS.GET_ATTENDANCE}?id=${res.data.Result._id}`)
          .then(res => {
            setAttendances(res.data.attenadnce);
            setAttendanceDataFetched(true); // Mark attendance data as fetched
            console.log(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, [id]);
  
  const handleLogout = () => {
    axios.get(API_ENDPOINTS.LOGOUT, { withCredentials: true })
      .then(res => {
        if (res.data.Status === "Success") {
          console.log('Logout Successful');
          navigate('/'); // ✅ Redirect to login
        } else {
          console.log('Logout Failed:', res.data.Message);
        }
      })
      .catch(err => console.error('Logout Error:', err));
  };
  
  
  

  return (
    <div className="container py-4">
      <div className='pdf' ref={pdfRef}>

        <div className="d-flex  align-items-center my-5" style={{ gap: "100px" }}>
          <img
            src="https://res.cloudinary.com/dldubddug/image/upload/v1743750611/Datavalley_logo_Black-text_1_jkrc7y.jpg"
            alt="Employee"
            className='empImg'
               
          />
          <h2>Dear {employee.name}</h2>
        </div>
        <div className='d-flex  flex-sm-column flex-md-column flex-xl-row  justify-content-between  mb-4'>
          <div className="general">

            <div className='d-flex gap-2 flex-column mt-3'>
              <h2>General Information</h2>
              <h5>Name: {employee.name}</h5>
              <h5>Email: {employee.email}</h5>
              <h5>Salary: {employee.fixedctc}</h5>
            </div>
          </div>
          <div className="job_related d-flex gap-2 flex-column mt-3">
            <h2>Job Information</h2>
            <h5>Designation: {employee.designation}</h5>
            <h5>Date of Joined: {employee.dateofjoined}</h5>
            <h5>HRA: {employee.hraearn}</h5>
            <h5>BONUS: {employee.bonusearn}</h5>
          </div>
        </div>

      </div>
      <button className='btn btn-danger' style={{ position: "absolute", top: "30px", right: "30px" }} onClick={handleLogout}>Logout</button>
      
      <div className="d-flex gap-2 mt-3">
        <button className='btn btn-primary' onClick={() => handleDownloadPdf('hyderabad')}>
          Download Hyderabad Payslip
        </button>
        <button className='btn btn-success' onClick={() => handleDownloadPdf('vijayawada')}>
          Download Vijayawada Payslip
        </button>
        <button className='btn btn-secondary' onClick={() => handleDownloadPdf()}>
          Download Default Payslip
        </button>
      </div>
      <div className='table-responsive mt-4'>
        <h2>Attendance History</h2>
        {attendanceDataFetched ? (
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>History Id</th>
                <th>Name</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendances.map((attendance, index) => (
                <tr key={index}>
                  <td>{attendance._id}</td>
                  <td>{employee.name}</td>
                  <td>{attendance.date}</td>
                  <td
                    style={
                      attendance.status === "present"
                        ? { color: "green", fontWeight: "bold" }
                        : { color: "red", fontWeight: "bold" }
                    }
                  >
                    {attendance.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading attendance data...</p>
        )}
      </div>
    </div>
  );
}

export default EmployeeDetail;
