import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import transactions from './table/table-reducer';
//logger
const midleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    transactions: transactions,
  },
  midleware,
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
