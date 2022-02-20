import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  getVerifyTokenRepeatRequest,
  getVerifyTokenRepeatSuccess,
  getVerifyTokenRepeatError,
} from './auth-actions.js';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:3001/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('api/users/signup', credentials);

    token.set(response.data.token);

    dispatch(registerSuccess(response.data));

    toast.success(`Пожалуйста, подвердите регистрацию на своей почте :)`);
  } catch (error) {
    dispatch(registerError(error.message));
    toast.error('Такой пользователь уже существует');
  }
};

const verifyTokenRepeat = email => async dispatch => {
  dispatch(getVerifyTokenRepeatRequest());
  try {
    const response = await axios.post('/api/users/verify', { email });

    dispatch(getVerifyTokenRepeatSuccess(response.data.message));
    toast.success(`The email has successfully resend`);
  } catch (error) {
    dispatch(getVerifyTokenRepeatError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/api/users/login', credentials);

    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
    toast.success(`Welcome to Wallet`);
  } catch (error) {
    dispatch(loginError(error.message));
    toast.error('Your account is not verified, please confirm your email');
  }
};

const logout = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/api/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
    toast.error('Oops, something wrong :(');
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: storageToken },
  } = getState();

  if (!storageToken) {
    return;
  }

  token.set(storageToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.get('/api/users/currentUser');
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

const authOperations = {
  register,
  verifyTokenRepeat,
  login,
  logout,
  getCurrentUser,
};
export default authOperations;
