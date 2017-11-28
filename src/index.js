import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createHashHistory } from 'history';

import 'sanitize.css';
import '@/styles/main.scss';

import storeConfig from '@/store';
import App from '@/scenes/Layout';

const createdHistory = createHashHistory({
  hashType: 'hashbang',
});

const store = storeConfig(createdHistory);

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={createdHistory}>
        <App />
      </Router>
    </Provider>
  ),
  document.querySelector('#app'),
);
