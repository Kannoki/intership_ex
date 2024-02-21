// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Dispatch } from 'redux';
// import login from '../../api/userApi';

// interface UserState {
//     username: string;
//     password: string;
//     loggedIn: boolean;
// }

// interface UserCredentials {
//     username: string;
//     password: string;
// }

// const initialState: UserState = {
//     username: '',
//     password: '',
//     loggedIn: false,
// };

// export const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setUserCredentials: (state, action: PayloadAction<{ username: string; password: string }>) => {
//             state.username = action.payload.username;
//             state.password = action.payload.password;
//         },
//         setLoggedIn: (state, action: PayloadAction<boolean>) => {
//             state.loggedIn = action.payload;
//         },
//     },
// });

// export const { setUserCredentials, setLoggedIn } = userSlice.actions;

// export const fetchUserLogin = (userCredential: UserCredentials) => async (dispatch: Dispatch) => {
//     try {
//         const user = await login(userCredential);
//         if (user) {
//             dispatch(setUserCredentials(userCredential));
//             dispatch(setLoggedIn(true));
//             localStorage.setItem('userCredentials', JSON.stringify(userCredential));
//             return true;
//         } else {
//             return false;
//         }
//     } catch (error) {
//         console.error('Error logging in:', error);
//         return false;
//     }
// };

// export const selectUser = (state: { user: UserState }) => state.user;

// export default userSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;