import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actions from './transactions-actions';

axios.defaults.baseURL = 'http://localhost:3001/api';

const getTransactions = async () => {
  const { data } = await axios.get('/transactions');
  return data;
};

export const fetchTransactions = createAsyncThunk(
  'transactions/fetch',
  async function (_, { rejectWithValue }) {
    try {
      const data = await getTransactions();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// const getTransactions = () => {
//   return axios
//     .get('/transactions')
//     .then(response =>  response.data)
//     .catch(error => {
//       throw new Error(error.message);
//     });
// };
