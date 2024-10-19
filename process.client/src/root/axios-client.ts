import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://82.146.36.64:7165/api/'
});

export default axiosClient;