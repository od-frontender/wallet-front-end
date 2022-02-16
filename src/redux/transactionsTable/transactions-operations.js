import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import actions from './transactions-actions';

axios.defaults.baseURL = 'http://localhost:3001/api';

const getTransactions = () => {
  return axios
    .get('/transactions')
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.message);
    });
};

export const fetchTransactions = createAsyncThunk(
  actions.fetchTransactions,
  async (_, { rejectWithValue }) => {
    try {
      const transactions = await getTransactions();
      console.log('operations:', transactions);
      return transactions;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
