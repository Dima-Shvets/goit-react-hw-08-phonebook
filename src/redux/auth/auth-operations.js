import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
    set(token) {axios.defaults.headers.common.Authorization = `Bearer ${token}`},
    unset() {axios.defaults.headers.common.Authorization = ``}
}

export const signUp = createAsyncThunk(
    'auth/singup',
    async (credentials) => {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    }
)

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials) => {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    }
)

export const logOut = createAsyncThunk(
    'auth/logout',
    async() => {
        await axios.post('/users/logout') 
        token.unset();
    }
)

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, {getState, rejectWithValue}) => {
        const state = getState();
        const persistedToken = state.auth.token;
        
        if (persistedToken === null) {
            return rejectWithValue
        }
        
        token.set(persistedToken)
        const { data } = await axios.get('/users/current');
        return data;
    }
)