import axios from 'axios';

const host = process.env.HOST_SERVER;
const apiClient = axios.create({
  baseURL: 'http://13.125.249.194:5000',
  withCredentials: true,
});

export default apiClient;
