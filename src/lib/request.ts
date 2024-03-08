import axios from "axios";
import { getToken } from "./storage";

const BASE_URL = process.env.REACT_APP_API_URL || "http://10.20.1.101/";

export const request = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

request.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
