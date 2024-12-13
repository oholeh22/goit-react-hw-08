import axios from 'axios';

const api = axios.create({
  baseURL: 'https://connections-api.goit.global', 
});

export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete api.defaults.headers.common.Authorization;
};

export default api;
