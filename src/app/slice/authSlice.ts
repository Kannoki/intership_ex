import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface LoginPayload {
  username: string;
  password: string;
}
export interface authState {
  isAuthenticated: boolean;
  logging?: boolean;
  token?: string;
}
const initialState: authState = {
  isAuthenticated: false,
  logging: false,
  token: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogin: (state, action: PayloadAction<LoginPayload>) => {
      state.logging = true;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.logging = false;
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    loginFailed: (state, action: PayloadAction<any>) => {
      state.logging = false;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.token = '';
    },
  },
});

export const { authLogin, loginSuccess, loginFailed, logOut } =
  authSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
const authReducer = authSlice.reducer;
export default authReducer;
