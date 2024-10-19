import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://localhost:7165/api/'
});

export default axiosClient;