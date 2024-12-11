import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const register = createAsyncThunk('auth/Register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/register', credentials);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


