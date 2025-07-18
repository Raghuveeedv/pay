import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { API_ENDPOINTS } from './config';
function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(API_ENDPOINTS.LOGIN, values)
          .then(res => {
            if (res.data.Status === 'Success') {
              navigate('/dashboard');
            } else {
              toast.error(res.data.Error);
            }
          })
          .catch(err => {
            console.log(err);
            toast.error('Login failed. Please check your credentials.');
          });
      };
      

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <ToastContainer />
            <div className='p-3 rounded w-25 border loginForm'>
                <div className='text-danger'>
                </div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email' 
                          onChange={e => setValues({...values, email: e.target.value})} className='form-control rounded-0' autoComplete='off'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                          onChange={e => setValues({...values, password: e.target.value})} className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Log in</button>
                    <p>You are agree to aour terms and policies</p>
                </form>
            </div>
        </div>
    )
}

export default Login