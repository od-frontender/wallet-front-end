import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tableReducer from './table/table-reducer';
//logger
const midleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    finance: tableReducer,
  },

  midleware,
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
