import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { getTotalBalance } from '../functionServise';

import { fetchTransactions } from './table-operations';

const tableTransactions = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
  //  {
  //   const byType = payload.map(el =>
  //     el.type === true ? el.sum : (el.sum = 0),
  //   );
  //   console.log('byType', byType);

  //   const sum = byType.reduce((previousValue, current) => {
  //     return previousValue + current;
  //   });
  //   console.log('sum', typeof sum);

  //   return payload;
  // },
});

const totalBalance = createReducer('', {
  [fetchTransactions.fulfilled]: (_, { payload }) => getTotalBalance(payload),
});

export default combineReducers({
  tableTransactions,
  totalBalance,
});
