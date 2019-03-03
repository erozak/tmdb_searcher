import 'sanitize.css';
import 'whatwg-fetch';

import { createHashHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { IconContext } from 'react-icons';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './containers/App';
import ServiceManager from './containers/ServiceManager';
import { defaultTMDBStore, TMDBManager } from './modules/TMDBManager';

import { CLASS_NAME } from './styled';
import { theme } from './styled/theme';

const history = createHashHistory({
  hashType: 'hashbang',
});

const NODE = document.querySelector('#root');

const TMDB_API_KEY = 'b9109bab34dae32142b6616b29c1f7fb';
const tmdb = new TMDBManager(TMDB_API_KEY, defaultTMDBStore);

const IconConfig = {
  className: CLASS_NAME.reactIcon,
};

render(
  <ServiceManager tmdb={tmdb} history={history}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <IconContext.Provider value={IconConfig}>
          <App />
        </IconContext.Provider>
      </ThemeProvider>
    </Router>
  </ServiceManager>,
  NODE,
);
