import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://tradexclub.ru:7165/api/',
});

export default axiosClient;
