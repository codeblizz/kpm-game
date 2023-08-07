import axios from 'axios';

const config = {
  baseURL: process.env.NEXT_URL,
};

const axiosServer = axios.create(config);

const authInterceptor = async (config: any) => {
  let token: string | null;
  config.baseURL = process.env.NEXT_URL;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return config;
};

axiosServer.interceptors.request.use(authInterceptor);


export default axiosServer;
