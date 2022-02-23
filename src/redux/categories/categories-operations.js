import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from './servise';
import * as actions from './categories-actions';

export const fetchCategory = createAsyncThunk(
  actions.fetchCategory,
  async function (_, { rejectWithValue }) {
    try {
      const data = await API.getCategories();
      console.log('data', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
