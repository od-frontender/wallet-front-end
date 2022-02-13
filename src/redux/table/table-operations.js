import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import actions from './table-actions';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getTransactions = () => {
  return axios.get('/todos').then(response => response.data);
};

export const fetchTransactions = createAsyncThunk(
  actions.fetchTransactions,
  async (_, { rejectWithValue }) => {
    try {
      const transactions = await getTransactions();

      return transactions;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
