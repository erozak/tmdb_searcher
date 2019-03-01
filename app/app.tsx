import 'sanitize.css/sanitize.css';
import 'whatwg-fetch';

import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './containers/App';
import ServiceManager from './containers/ServiceManager';

import { theme } from './styled';

const NODE = document.querySelector('#root');

const TMDB_API_KEY = 'b9109bab34dae32142b6616b29c1f7fb';

render((
  <ServiceManager tmdbApiKey={TMDB_API_KEY}>
    <HashRouter hashType="hashbang">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </ServiceManager>
), NODE);
