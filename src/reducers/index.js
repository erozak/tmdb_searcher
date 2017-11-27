import { combineReducers } from 'redux-immutable';

import tmdbReducer from './data/tmdb';
import routerReducer from './routerReducer';

export default combineReducers({
  tmdb: tmdbReducer,
  routing: routerReducer,
});
