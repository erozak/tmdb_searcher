import 'babel-polyfill';
import 'font-awesome-webpack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './normalize.css';
import '../sass/main.scss';

import store from './store';

import Frame from './containers/Frame';


ReactDOM.render(
  <Provider store={store}>
    <Frame />
  </Provider>,
  document.querySelector('#app'),
);
