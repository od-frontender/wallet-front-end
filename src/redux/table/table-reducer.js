import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { fetchTransactions } from './table-operations';

const transactions = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
});

export default combineReducers({
  transactions,
});
