import axios, { AxiosResponse } from 'axios';
import { LoginResponse } from '../models';
import { history } from '../index';
const baseURL = process.env.REACT_APP_API_URL;

const getLocalRefreshToken = () => {
  const token = window.localStorage.getItem('refresh_token');
  return token;
};

const updateLocalAccessToken = (res: LoginResponse) => {
  localStorage.setItem('access_token', res.access_token);
  localStorage.setItem('refresh_token', res.refresh_token);
};

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Add a request interceptor
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

// Add a response interceptor
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
        const rs: LoginResponse = await axios.post(url, {
          refresh_token: result,
        });
        updateLocalAccessToken(rs);
        return axiosClient(originalConfig);
      } catch (_error) {
        localStorage.clear();
        history.push('/')
        return Promise.reject(_error);
      }
    }
    return Promise.reject(error);
  }
);
export default axiosClient;