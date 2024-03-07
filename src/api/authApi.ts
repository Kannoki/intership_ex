import { User } from '../utils/user.type';
import axiosClient from './axios';

const authApi = {
  login(data: User): Promise<User> {
    const url = 'api/auth/login';
    return axiosClient.post(url, data);
  },
};

export default authApi;
