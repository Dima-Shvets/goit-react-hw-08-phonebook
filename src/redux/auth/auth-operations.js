import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    signUpService,
    logInService,
    logOutService,
    fetchCurrentUserService,
} from 'services/contacts-api-service';

export const signUp = createAsyncThunk(
    'auth/singup',
    async (credentials, { rejectWithValue }) => {
        try {
            const user = await signUpService(credentials);
            return user;
        } catch (error) {
            return rejectWithValue()
        }
    }
)

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, {rejectWithValue}) => {
        try {
            const user = await logInService(credentials);
            return user;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/logout',
    async(_, {rejectWithValue}) => {
        try {
            await logOutService() 
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, {getState, rejectWithValue}) => {
        const state = getState();
        const persistedToken = state.auth.token;
        
        if (persistedToken === null) {
            return rejectWithValue();
        }

        try {
            const user = await fetchCurrentUserService(persistedToken);
            return user;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)