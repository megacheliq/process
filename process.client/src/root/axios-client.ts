import axios from 'axios';
import https from 'https';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const axiosClient = axios.create({
  baseURL: 'https://82.146.36.64:7165/api/',
});

axiosClient.interceptors.request.use(config => {
  config.httpsAgent = httpsAgent;
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosClient;
