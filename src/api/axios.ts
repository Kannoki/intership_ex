import axios, { AxiosResponse } from 'axios';
import { LoginResponse } from '../utils/user.type';
import { getLocalRefreshToken, updateLocalAccessToken } from '../lib/storage';
const baseURL = process.env.REACT_APP_API;

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  function (config: any) {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  async function (error) {
    const originalConfig = error.config;
    if (error.response.status === 401) {
      try {
        const url = `${originalConfig.baseURL}/api/auth/token`;
        const result: any = await getLocalRefreshToken();
        const res: LoginResponse = await axios.post(url, {
          refresh_token: result,
        });
        updateLocalAccessToken(res);
        return axiosClient(originalConfig);
      } catch (_error) {
        localStorage.clear();
        return Promise.reject(_error);
      }
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
