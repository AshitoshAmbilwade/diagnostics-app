import axios from 'axios';

const instance = axios.create({
  baseURL: "https://diagnostics-app-1.onrender.com/api", // your backend API root
  headers: {
    'Content-Type': 'application/json',
  },
});
// ✅ Automatically attach token to every request (if exists)
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Or from cookies if you use cookies

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;