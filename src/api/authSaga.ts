import authApi from './authApi';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  LoginPayload,
  authLogin,
  loginFailed,
  loginSuccess,
} from '../app/slice/authSlice';
import { put, takeLeading } from 'redux-saga/effects';

function* handleLogin(
  action: PayloadAction<LoginPayload>
): Generator<any, void, any> {
  try {
    const data = yield authApi.login(action.payload);
    yield put(loginSuccess(data.access_token));
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);

    // yield call(history.push, "/users")
  } catch (error) {
    yield put(loginFailed(''));
  }
}
export function* authSaga() {
  yield takeLeading(authLogin.toString(), handleLogin);
}
