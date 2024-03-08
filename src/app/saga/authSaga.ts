import authApi from '../../api/authApi';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  LoginPayload,
  authLogin,
  loginFailed,
  loginSuccess,
  navigateToUsers,
} from '../slice/authSlice';
import { call, put, takeLeading } from 'redux-saga/effects';

function* handleLogin(
  action: PayloadAction<LoginPayload>
): Generator<any, void, any> {
  try {
    const data = yield authApi.login(action.payload);
    yield put(loginSuccess(data.access_token));
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);

    yield put(navigateToUsers());
  } catch (error) {
    yield put(loginFailed(''));
  }
}
export function* authSaga() {
  yield takeLeading(authLogin.toString(), handleLogin);
}
