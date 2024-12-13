import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

const setAuthHeader = (token) => {
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  delete apiClient.defaults.headers.common.Authorization;
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }

  setAuthHeader(token);

  try {
    const { data } = await apiClient.get('/contacts');
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/add', async (contact, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('No token found');
  }

  setAuthHeader(token);

  try {
    const { data } = await apiClient.post('/contacts', contact);
    console.log('Added contact:', data);
    return data;
  } catch (error) {
    console.error('Error adding contact:', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/delete', async (contactId, thunkAPI) => {
  try {
    await apiClient.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    console.error('Error deleting contact:', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
