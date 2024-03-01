import { call, put, takeLeading } from "redux-saga/effects";
import { LoginPayload, login, loginFailed, loginSuccess } from "./authSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";
import { history } from "index";

function* handleLogin(action: PayloadAction<LoginPayload>): Generator<any, void, any> {
    try {
        const data = yield authApi.login(action.payload)
        yield put(loginSuccess(data.access_token))
        window.localStorage.setItem("access_token", data.access_token)
        window.localStorage.setItem("refresh_token", data.refresh_token)

        yield call(history.push, "/users")
    }
    catch (error) {
        yield put(loginFailed(''))
    }

}
export function* authSaga() {
    yield takeLeading(login.toString(), handleLogin)
} 