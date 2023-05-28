import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    await axios.delete(`${API_URL}/logout`);
  } catch (error) {
    throw error.response.data;
  }
};
