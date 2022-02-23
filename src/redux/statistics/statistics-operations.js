import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actions from './statistics-actions';
import { fetchStatisticsAPI } from '../../assets/API/fetchStatistics';

export const fetchStatistics = createAsyncThunk(
  actions.fetchStatistics,
  async ({ month, year }) => {
    const stats = await fetchStatisticsAPI(month, year);
    return stats;
  },
);
