import axios from 'axios';

// Base API configuration
const API_BASE_URL = 'http://65.0.108.171:4000'; // Change to your server URL when needed

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Add token to all requests automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 errors (unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

