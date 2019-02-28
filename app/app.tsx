import 'sanitize.css/sanitize.css';
import 'whatwg-fetch';

import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './containers/App';

const NODE = document.querySelector('#root');

ReactDOM.render(<App />, NODE);
