import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { userBalanсe } from '../functionServise';
import { filtredTransactions } from './transactions-actions';
import { fetchTransactions } from './transactions-operations';

const tableTransactions = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
});

const totalBalance = createReducer('', {
  [fetchTransactions.fulfilled]: (_, { payload }) => userBalanсe(payload),
});

const filter = createReducer('', {
  [filtredTransactions]: (state, { payload }) => payload,
});

export default combineReducers({
  tableTransactions,
  totalBalance,
  filter,
});
