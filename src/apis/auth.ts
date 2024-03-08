import { request } from "../lib/request";

export const login = async (username: string, password: string) => {
  return request.post("api/auth/login", {
    username,
    password,
  });
};
