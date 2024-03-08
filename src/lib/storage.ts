import { LoginResponse } from '../utils/user.type';

export const getRefreshToken = () => {
  const token = window.localStorage.getItem('refresh_token');
  return token;
};

export const setAccessToken = (res: LoginResponse) => {
  localStorage.setItem('access_token', res.access_token);
  localStorage.setItem('refresh_token', res.refresh_token);
};
