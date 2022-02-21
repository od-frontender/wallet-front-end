import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import tableReducer from './transactionsTable/transactions-reducer';
import statisticsReducer from './statistics/statistics-reducer';
import authReducer from './auth/auth-reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

//logger
const midleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    finance: tableReducer,
    statistics: statisticsReducer,
  },

  midleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
