import httpClient from "../libs/axios";
import { AuthReponse } from "../models";

const authApi = {
  login: (username: string, password: string): Promise<AuthReponse> => {
    const user = { username, password };
    return httpClient.post("/auth/login", user);
  },
};
export default authApi;
