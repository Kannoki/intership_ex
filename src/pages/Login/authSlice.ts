import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../models";
import authApi from "../../apis/authApi";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { clearStorage, setStorge } from "../../utils";

const { login } = authApi;
export interface AuthInterface {
  user: UserType | null;
  loading: boolean;
}
const initialState: AuthInterface = {
  user: null,
  loading: false,
};

export const signInAsync = createAsyncThunk(
  "auth/signIn",
  async (user: UserType) => {
    const { username, password } = user;
    const response = await login(username, password);
    return response;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserType>) => {
      const user = action.payload;
      state.user = user;
      setStorge("user", JSON.stringify(user));
    },
    signOut: (state) => {
      state.user = null;
      clearStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInAsync.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export const { signIn, signOut } = authSlice.actions;
export const selectBookList = (state: RootState) => state.auth;
export default authSlice.reducer;
