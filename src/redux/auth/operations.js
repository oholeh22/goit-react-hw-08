import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { setAuthHeader, clearAuthHeader } from '../../api';

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const response = await api.post('/users/signup', userData);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Registration failed');
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await api.post('/users/login', credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Login failed');
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.post('/users/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Logout failed');
  } finally {
    clearAuthHeader();
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }

  try {
    setAuthHeader(token);
    const response = await api.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Failed to refresh user');
  }
});
