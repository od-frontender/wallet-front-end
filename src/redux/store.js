import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import todosReducer from './todos/todos-reducer'

const midleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  //   reducer: {
  //     data: todosReducer,
  //   },
  midleware,
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
