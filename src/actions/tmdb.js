import { createAction } from 'redux-actions';

import {
  TMDB_DETAIL_CLEAR,
  TMDB_DETAIL_GET,
  TMDB_DETAIL_SAVE,
  TMDB_DISCOVER_GET,
  TMDB_INIT,
  TMDB_LIST_CLEAR,
  TMDB_LIST_SAVE,
  TMDB_PAGE_SET,
  TMDB_SEARCH_GET,
} from '../constants/actionTypes';

export const onTmdbDetailClear = createAction(TMDB_DETAIL_CLEAR);
export const onTmdbDetailGet = createAction(TMDB_DETAIL_GET, id => ({ id }));
export const onTmdbDetailSave = createAction(TMDB_DETAIL_SAVE, detail => ({ detail }));

export const onTmdbDiscoverGet = createAction(TMDB_DISCOVER_GET, options => ({ options }));

export const onTmdbInit = createAction(TMDB_INIT, options => ({ options }));

export const onTmdbListClear = createAction(TMDB_LIST_CLEAR);
export const onTmdbListSave = createAction(TMDB_LIST_SAVE, results => ({ results }));

export const onTmdbPageSet = createAction(TMDB_PAGE_SET, pagination => ({ pagination }));

export const onTmdbSearchGet = createAction(TMDB_SEARCH_GET, (query, page = 1) => ({ query, page }));
