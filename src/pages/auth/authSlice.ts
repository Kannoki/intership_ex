import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface LoginPayload {
    username: string;
    password: string
}
export interface authState {
    isAuthenticated: boolean;
    logging?: boolean;
    token?: string
}
const initialState: authState = {
    isAuthenticated: false,
    logging: false,
    token: ''
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginPayload>) => {
            state.logging = true
        },
        loginSuccess: (state, action: PayloadAction<string>) => {
            state.logging = false;
            state.isAuthenticated = true;
            state.token = action.payload
        },
        loginFailed: (state, action: PayloadAction<any>) => {
            state.logging = false;
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.token = ''
          },
    }
})

// Actions
export const { login, loginSuccess, loginFailed, logout } = authSlice.actions;


// Selectors
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated
// Reducers
const authReducer = authSlice.reducer
export default authReducer