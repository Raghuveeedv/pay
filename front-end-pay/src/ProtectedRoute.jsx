// ProtectedRoute.js
import axios from "axios";
import { API_ENDPOINTS } from './config';

useEffect(() => {
  const token = localStorage.getItem("token"); // or sessionStorage.getItem("token")

  axios.get(API_ENDPOINTS.DASHBOARD, {
    headers: {
      "x-token": token
    }
  }).then(res => {
    if (res.data.Status === 'Success') {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }).catch(err => {
    console.error(err);
    setAuth(false);
  });
}, []);
