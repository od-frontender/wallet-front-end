import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { getUserBalance } from '../getUserBalance';
import { filtredTransactions } from './transactions-actions';
import { fetchTransactions } from './transactions-operations';

const tableTransactions = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
});

const totalBalance = createReducer('', {
  [fetchTransactions.fulfilled]: (state, { payload }) =>
    getUserBalance(payload),
});

const filter = createReducer('', {
  [filtredTransactions]: (_, { payload }) => payload,
});

export default combineReducers({
  tableTransactions,
  totalBalance,
  filter,
});
