import { createSlice } from '@reduxjs/toolkit';

import { signUp, logIn, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
    error: null
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
            state.error = null;
        },
        [logIn.pending]: (state) => {
            state.error = null;
        },
        [logIn.rejected]: (state) => {
            state.error = true;
        },
        [logOut.fulfilled]: (state) => {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.isLoggedIn = false;

        },
        [fetchCurrentUser.pending]: (state) => {
            state.isFetchingCurrentUser = true;  
        },
        [fetchCurrentUser.fulfilled]: (state, { payload }) => {
            state.user = payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [fetchCurrentUser.rejected]: (state) => {
            state.isFetchingCurrentUser = false;
        }
    }
})

export default authSlice.reducer