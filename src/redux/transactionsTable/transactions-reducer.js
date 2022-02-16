import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { userBalanсe } from '../functionServise';
import { filtredTransactions } from './transactions-actions';
import { fetchTransactions } from './transactions-operations';

const tableTransactions = createReducer([], {
  [fetchTransactions.fulfilled]: (state, { payload }) => ({ state: payload }),
  // {
  //   console.log('payload=>', payload);

  //   return payload;
  // },
});

const totalBalance = createReducer('', {
  [fetchTransactions.fulfilled]: (state, { payload }) => userBalanсe(payload),
});

const filter = createReducer('', {
  [filtredTransactions]: (state, { payload }) => ({ payload }),
});

export default combineReducers({
  tableTransactions,
  totalBalance,
  filter,
});
