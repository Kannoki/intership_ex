import { UserAuth } from '../utils/user.type';
import axiosClient from './axios';

const authApi = {
  login(data: UserAuth): Promise<UserAuth> {
    const url = 'api/auth/login';
    return axiosClient.post(url, data);
  },
};

export default authApi;
