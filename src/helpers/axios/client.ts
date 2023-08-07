import axios from 'axios';

const config = {
  baseURL: process.env.NEXTAUTH_URL,
  // withCredentials: true
};

/** Creating the instance for axios */
const axiosClient = axios.create(config);

export default axiosClient;
