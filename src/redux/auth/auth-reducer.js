import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
  getCurrentUserAvatarSuccess,
} from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload: { name, email, avatar, avatarId } }) => ({
    name,
    email,
    avatar,
    avatarId,
  }),
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (
    _,
    { payload: { name, email, avatar, avatarId } },
  ) => ({
    name,
    email,
    avatar,
    avatarId,
  }),
  [getCurrentUserAvatarSuccess]: (state, { payload: { avatarUrl } }) => ({
    ...state,
    avatar: avatarUrl,
  }),
});
const avatar = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.avatarURL,
  [loginSuccess]: (_, { payload }) => payload.avatarURL,
  [getCurrentUserAvatarSuccess]: (_, { payload }) => payload.avatarURL,
  [logoutSuccess]: (_, __) => null,
  [getCurrentUserError]: (_, __) => null,
});
const name = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.user.mame,
  [loginSuccess]: (_, { payload }) => payload.user.name,
  [logoutSuccess]: (_, __) => null,
  [getCurrentUserError]: (_, __) => null,
});
const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: (_, __) => null,
  [getCurrentUserError]: (_, __) => null,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
});

export default combineReducers({
  user,
  token,
  isAuthenticated,
  error,
  name,
  avatar,
});
