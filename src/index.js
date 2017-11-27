import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHashHistory } from 'history';

import 'sanitize.css';
import '@/styles/main.scss';

import storeConfig from '@/store';
import App from '@/scenes/Layout';

const createdHistory = createHashHistory({
  hashType: 'hashbang',
});

const store = storeConfig(createdHistory);

const history = syncHistoryWithStore(createdHistory, store, {
  selectLocationState: state => state.get('routing').toJS(),
});

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  ),
  document.querySelector('#app'),
);
