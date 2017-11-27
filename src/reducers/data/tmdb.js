import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

import defaultState from '@/constants/state';
import {
  TMDB_DETAIL_CLEAR,
  TMDB_DETAIL_SAVE,
  TMDB_LIST_CLEAR,
  TMDB_LIST_SAVE,
  TMDB_PAGE_SET,
  TMDB_QUERY_CHANGE,
} from '@/constants/actionTypes';

const tmdbReducer = handleActions({

  [TMDB_DETAIL_CLEAR]: state => state.set('detail', Map()),
  [TMDB_DETAIL_SAVE]: (state, { payload: { detail } }) => (
    state.set('detail', detail)
  ),

  [TMDB_LIST_CLEAR]: state => (
    state.withMutations(map => (
      map
        .set('listOpt', Map())
        .set('movies', List())
        .set('pagination', List())
    ))
  ),
  [TMDB_LIST_SAVE]: (state, { payload: { results } }) => (
    state.set('movies', results)
  ),

  [TMDB_PAGE_SET]: (state, { payload: { pagination } }) => (
    state.set('pagination', pagination)
  ),

  [TMDB_QUERY_CHANGE]: (state, { payload: { text } }) => (
    state.set('query', text)
  ),

}, defaultState);

export default tmdbReducer;
