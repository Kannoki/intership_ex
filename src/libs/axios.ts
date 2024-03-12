import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getStorage, setStorge } from "../utils";
import { AuthReponse } from "../models";

const baseURL = import.meta.env.VITE_API;
console.log(baseURL);
const httpClient = axios.create({
  baseURL: `${baseURL}/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const refreshTokenFunc = async (refresh_token: string) => {
  const res: AuthReponse = await httpClient.post("/auth/token", {
    refresh_token,
  });

  setStorge(
    "token",
    JSON.stringify({
      access_token: res.access_token,
      refresh_token: res.refresh_token,
    })
  );
  return res.access_token;
};

const onResponseSuccess = (response: AxiosResponse) => {
  return response.data;
};

const onResponseError = async (error: AxiosError) => {
  if (error.response) {
    return Promise.reject(error.response);
  }
  return Promise.reject(error);
};

httpClient.interceptors.response.use(onResponseSuccess, onResponseError);

httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getStorage("token") as AuthReponse;
    if (token) {
      config.headers.Authorization = `Bearer ${token.access_token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.status === 401 || error.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const token = getStorage("token") as AuthReponse;
      const refreshToken = token.refresh_token;
      if (refreshToken) {
        const newAccessToken = await refreshTokenFunc(refreshToken);
        setStorge("token", JSON.stringify(newAccessToken));
        originalRequest.headers = {
          Authorization: "Bearer " + newAccessToken,
        };
        return httpClient(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default httpClient;
