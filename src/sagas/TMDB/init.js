import { call, put } from 'redux-saga/effects';

import {
  onTmdbListClear,
  onTmdbListSave,
  onTmdbPageSet,
} from '@/actions';
import { discoverMovie } from '@/api/tmdb';

import discoverMovieFilter from './utils/discoverMovieFilter';

export default function* init({ payload: { options } }) {
  put(onTmdbListClear());

  const discover = yield call(discoverMovie, options);

  if (discover && discover.response) {
    const { pagination, movies } = discoverMovieFilter(discover.response);

    yield put(onTmdbListSave(movies));
    yield put(onTmdbPageSet(pagination));
  } else if (process.env.NODE_ENV === 'development') {
    console.error('[ERR][SAGA][TMDB] Init - Discover : ', discover);
  } else {
    alert('Oops! Something error. Please reload and try again.');
  }
}
