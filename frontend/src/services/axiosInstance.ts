
import axios from 'axios';

// Use environment variable for base URL, fallback to localhost for dev/testing
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5242/api/v1';

const axiosInstance = axios.create({
  baseURL,
  // headers: {
  //   'Content-Type': 'application/json',
  //   // Add other default headers here if needed
  // },
  // timeout: 10000, // Optional: set a timeout (ms)
});

// axiosInstance.interceptors.response.use(
//   response => response,
//   error => {
//     // handle errors globally here
//     if (error.response) {
//       console.error('API error:', error.response.status, error.response.data);
//       throw new Error('Failed to fetch plant data from server.');
//     } else if (error.request) {
//       console.error('No response from API:', error.request);
//       throw new Error('No response from server. Check your API URL and server status.');
//     } else {
//       console.error('Axios error:', error.message);
//       throw new Error('An unexpected error occurred.');
//     }
//     // always rethrow so local try/catch can handle it too
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
