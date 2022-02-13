import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { fetchTransactions, fetchBalance } from './table-operations';

const tableTransactions = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
});

const totalBalance = createReducer('', {
  [fetchBalance.fulfilled]: (_, { payload }) => payload,
});

export default combineReducers({
  tableTransactions,
  totalBalance,
});
