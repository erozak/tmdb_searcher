import { handleActions } from 'redux-actions';

import defaultState from '../../constants/state';
import {
  TMDB_DETAIL_CLEAR,
  TMDB_DETAIL_SAVE,
  TMDB_LIST_CLEAR,
  TMDB_LIST_SAVE,
  TMDB_PAGE_SET,
} from '../../constants/actionTypes';

const tmdbReducer = handleActions({

  [TMDB_DETAIL_CLEAR]: state => state.set('detail', {}),
  [TMDB_DETAIL_SAVE]: (state, { payload: { detail } }) => (
    state.set('detail', detail)
  ),

  [TMDB_LIST_CLEAR]: state => (
    state.withMutations(map => (
      map
        .set('listOpt', {})
        .set('movies', [])
        .set('pagination', {})
    ))
  ),
  [TMDB_LIST_SAVE]: (state, { payload: { results } }) => (
    state.set('movies', results)
  ),

  [TMDB_PAGE_SET]: (state, { payload: { pagination } }) => (
    state.set('pagination', pagination)
  ),

}, defaultState);

export default tmdbReducer;
