import 'sanitize.css/sanitize.css';
import 'whatwg-fetch';

import React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './containers/App';
import ServiceManager from './containers/ServiceManager';

const NODE = document.querySelector('#root');

ReactDOM.render((
  <ServiceManager>
    <HashRouter hashType="hashbang">
      <App />
    </HashRouter>
  </ServiceManager>
), NODE);
