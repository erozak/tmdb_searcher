import { combineReducers } from 'redux-immutable';

import tmdbReducer from './data/tmdb';

const reducers = combineReducers({
  tmdb: tmdbReducer,
});

export default reducers;
