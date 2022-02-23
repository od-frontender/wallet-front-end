import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { fetchCategory } from './categories-operations';

const items = createReducer([], {
  [fetchCategory.fulfilled]: (_, action) => action.payload.data,
});

export default combineReducers({
  items,
});
