import axios from "axios";
import { getStorage } from "../utils";

const httpClient = axios.create({
  baseURL: "http://localhost:5173",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
const token = getStorage("token");
if (token) {
  axios.defaults.headers.Authorization = "Bearer " + token;
}

const refreshTokenFunc = async (refreshToken: string) => {
  const res = await httpClient.post("/auth/refresh-token", {
    refreshToken,
  });
  return res.data.accessToken;
};

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = await getStorage("refresh");
      const newAccessToken = await refreshTokenFunc(refreshToken);
      originalRequest.headers = {
        Authorization: "Bearer " + newAccessToken,
      };
      return httpClient(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default httpClient;
