import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from './servises';
import * as actions from './transactions-actions';

export const fetchTransactions = createAsyncThunk(
  actions.fetchTransactions,
  async function (_, { rejectWithValue }) {
    try {
      const data = await API.getTransactions();
      console.log('fetchTransactions', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addTransactions = createAsyncThunk(
  actions.addTransactions,
  async (data, { rejectWithValue }) => {
    try {
      console.log('data', data);
      const transaction = await API.addTransactions(data);
      //   currentCategory,
      //   sum,
      //   comentary,
      //   type,
      // );

      return transaction;
    } catch (error) {
      return rejectWithValue(error);
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
