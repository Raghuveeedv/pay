import React from 'react'
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Employee from './Employee'
import Home from './Home'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'
import Start from './Start'
import EmployeeDetail from './EmployeeDetail'
import EmployeeLogin from './EmployeeLogin'
import Attendance from './Attendance'
import History from './History'
import CompanySettings from './CompanySettings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔒 Protected Dashboard Route */}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='employee' element={<Employee />} />
          <Route path='attendance' element={<Attendance />} />
          <Route path='history' element={<History />} />
          <Route path='create' element={<AddEmployee />} />
          <Route path='settings' element={<CompanySettings />} />
          <Route path='employeeEdit/:id' element={<EditEmployee />} />
        </Route>

        {/* 🔓 Public Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Start />} />
        <Route path='/employeeLogin' element={<EmployeeLogin />} />
        <Route path='/employeedetail/:id' element={<EmployeeDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
