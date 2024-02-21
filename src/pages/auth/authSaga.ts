import { call, put, takeLeading } from "redux-saga/effects";
import { LoginPayload, login, loginSuccess } from "./authSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";

function* handleLogin(action: PayloadAction<LoginPayload>): Generator<any, void, any> {
    const data = yield authApi.login(action.payload)
    yield put(loginSuccess(data.token))
    localStorage.setItem("access_token", data.token)
}
export function* authSaga() {
    yield takeLeading( login.toString(), handleLogin)
} 