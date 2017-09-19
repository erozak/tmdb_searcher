import { call, put } from 'redux-saga/effects';

import {
  onTmdbListClear,
  onTmdbListSave,
  onTmdbPageSet,
} from '../../actions';
import { discoverMovie as getDiscover } from '../../tmdbApi';
import discoverMovieFilter from './utils/discoverMovieFilter';

export default function* init({ payload: { options } }) {
  put(onTmdbListClear());

  const discover = yield call(getDiscover, options);

  if (discover && discover.response) {
    const { pagination, movies } = discoverMovieFilter(discover.response);

    yield put(onTmdbListSave(movies));
    yield put(onTmdbPageSet(pagination));
  } else {
    console.error('[ERR][SAGA][TMDB] Init - Discover : ', discover);
  }
}