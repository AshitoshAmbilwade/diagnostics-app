import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://diagnostics-app-1.onrender.com/api', // your backend API root
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
