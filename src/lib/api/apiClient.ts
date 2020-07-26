import axios from 'axios';

const host = process.env.HOST_SERVER;
const apiClient = axios.create({ baseURL: host, withCredentials: true });

export default apiClient;
