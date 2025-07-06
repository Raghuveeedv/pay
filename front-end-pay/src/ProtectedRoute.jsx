// ProtectedRoute.js
import axios from "axios";

useEffect(() => {
  const token = localStorage.getItem("token"); // or sessionStorage.getItem("token")

  axios.get("https://fpay-back.onrender.com/api/v1/dashboard", {
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
