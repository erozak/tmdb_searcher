import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'sanitize.css';
import '@/styles/main.scss';

import store from './store';
import Layout from './scenes/Layout';

ReactDOM.render(
  (
    <Provider store={store}>
      <Layout />
    </Provider>
  ),
  document.querySelector('#app'),
);
