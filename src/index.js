import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

import store from './redux/store';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
