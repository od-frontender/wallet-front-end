<<<<<<< HEAD

=======
>>>>>>> dev
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchStatistics } from './statistics-operations';

const entities = createReducer([], {
  [fetchStatistics.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchStatistics.pending]: () => true,
  [fetchStatistics.fulfilled]: () => false,
  [fetchStatistics.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchStatistics.rejected]: (_, action) => action.payload,
  [fetchStatistics.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
<<<<<<< HEAD
});
=======
});
>>>>>>> dev
