import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Dashboard() {
	const navigate = useNavigate()
	axios.defaults.withCredentials = true;

	useEffect(() => {
		axios.get('https://fpay-back.onrender.com/api/v1/dashboard', { withCredentials: true })
		  .then(res => {
			if (res.data.Status === "Success") {
			  if (res.data.email !== "admin@gmail.com") {
				const id = res.data.id;
				navigate('/employeedetail/' + id);
			  }
			} else {
			  console.warn('Not authorized:', res.data);
			  navigate('/');
			}
		  })
		  .catch(err => {
			console.error('Dashboard API error:', err);
			navigate('/');
		  });
	  }, []);

	const handleLogout = () => {
		axios.get('https://fpay-back.onrender.com/api/v1/logout', { withCredentials: true })
		  .then(res => {
			if (res.data.Status === "Success") {
			  localStorage.removeItem('token');
			  console.log('Logout Successful');
			  navigate('/');
			} else {
			  console.log('Logout Failed:', res.data.Message);
			}
		  })
		  .catch(err => console.error('Logout Error:', err));
	  };

	return (
		<div className="container-fluid">
			<div className="row flex-nowrap">
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
						<a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
							<span className="fs-5 fw-bolder d-none d-sm-inline">Admin Dashboard</span>
						</a>
						<ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
							<li>
								<Link to="/dashboard" className="nav-link text-white px-0 align-middle">
									<i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
								</Link>
							</li>
							<li>
								<Link to="/dashboard/employee" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Manage Employees</span>
								</Link>
							</li>
							<li>
								<Link to="/dashboard/attendance" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Attendance</span>
								</Link>
							</li>
							<li>
								<Link to="/dashboard/history" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-tools"></i> <span className="ms-1 d-none d-sm-inline">History</span>
								</Link>
							</li>
							<li>
								<Link to="/dashboard/settings" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-gear"></i> <span className="ms-1 d-none d-sm-inline">Company Settings</span>
								</Link>
							</li>
							<li onClick={handleLogout}>
								<a className="nav-link px-0 align-middle text-white" style={{ cursor: "pointer" }}>
									<i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col p-0 m-0">
					<div className='p-2 d-flex justify-content-center shadow'>
						<h4>Employee Management System</h4>						
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
