import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import actions from './transactions-actions';

axios.defaults.baseURL = 'http://localhost:3001/api';

const getTransactions = () => {
  return axios.get('/transactions').then(response => response.data);
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

// const getBalance = () => {
//   return axios.get('/balance').then(response => response.data);
// };
// export const fetchBalance = createAsyncThunk(
//   actions.fetchBalance,
//   async (_, { rejectWithValue }) => {
//     try {
//       const balance = 24000.0;
//       // await getBalance();
//       return balance;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

// const data = [
//   {
//     id: 1,
//     data: '04.01.19',
//     type: '-',
//     category: 'car',
//     comment: 'oil',
//     sum: '1000.00',
//   },
//   {
//     id: 21,
//     data: '05.01.19',
//     type: '+',
//     category: 'products',
//     comment: 'vegetables',
//     sum: '250.00',
//   },
//   {
//     id: 23,
//     data: '09.01.19',
//     type: '-',
//     category: 'car',
//     comment: 'STO',
//     sum: '2508.00',
//   },
//   {
//     id: 22,
//     data: '06.01.19',
//     type: '+',
//     category: 'products',
//     comment: 'vegetables',
//     sum: '250.00',
//   },
//   {
//     id: 239,
//     data: '06.01.19',
//     type: '-',
//     category: 'products',
//     comment: 'vegetables',
//     sum: '250.00',
//   },
// ];
