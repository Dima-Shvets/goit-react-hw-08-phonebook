import { createSlice } from '@reduxjs/toolkit';

import { signUp, logIn, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signUp.fulfilled]:(state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled]: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled]: (state) => {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.isLoggedIn = false;
        },
        [fetchCurrentUser.fulfilled]: (state, { payload }) => {
            state.user = payload;
        }
    }
})

export default authSlice.reducer