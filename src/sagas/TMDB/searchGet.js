import { call, put } from 'redux-saga/effects';

import {
  onTmdbDetailClear,
  onTmdbListClear,
  onTmdbListSave,
  onTmdbPageSet,
} from '@/actions';
import { searchMovie as getSearchMovie } from '@/tmdbApi';
import discoverMovieFilter from './utils/discoverMovieFilter';

export default function* searchGet({ payload: { query, page } }) {
  put(onTmdbListClear());

  const { response, error } = yield call(getSearchMovie, query, page);

  if (response) {
    const { pagination, movies } = discoverMovieFilter(response);

    yield put(onTmdbDetailClear());
    yield put(onTmdbListSave(movies));
    yield put(onTmdbPageSet(pagination));
  } else if (process.env.NODE_ENV === 'development') {
    console.error(`[ERR][SAGA] Search Get: ${query}, page(${page})`, error);
  } else {
    alert('Oops! Something error. Please reload and try again.');
  }
}
