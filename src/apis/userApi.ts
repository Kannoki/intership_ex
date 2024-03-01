import httpClient from "../libs/axios";
import { RegisterChartResponse, TableApiResponse, UserType } from "../models";

const userApi = {
  getUserRegisterChart: (): Promise<RegisterChartResponse> =>
    httpClient.get("/register/chart"),
  getUser: (
    pageSize = 10,
    current = 1
  ): Promise<TableApiResponse<UserType>> => {
    return httpClient.get(`/user?page_size=${pageSize}&page=${current}`);
  },
};

export default userApi;
