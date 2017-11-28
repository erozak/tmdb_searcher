import qs from 'querystring';
import { call, put } from 'redux-saga/effects';
import { routerActions } from 'react-router-redux';

import {
  onTmdbDetailClear,
  onTmdbListClear,
  onTmdbListSave,
  onTmdbPageSet,
  onTmdbQueryChange,
} from '@/actions';
import { searchMovie as getSearchMovie } from '@/api/tmdb';

import discoverMovieFilter from './utils/discoverMovieFilter';

export default function* searchGet({ payload: { query, page } }) {
  put(onTmdbQueryChange(query));
  put(onTmdbListClear());
  console.log('Searching...');
  const { response, error } = yield call(getSearchMovie, query, page);

  if (response) {
    const { pagination, movies } = discoverMovieFilter(response);

    yield put(onTmdbDetailClear());
    yield put(onTmdbListSave(movies));
    yield put(onTmdbPageSet(pagination));
    yield put(routerActions.push(`/search?${qs.stringify({ query })}`));
  } else if (process.env.NODE_ENV === 'development') {
    console.error(`[ERR][SAGA] Search Get: ${query}, page(${page})`, error);
  } else {
    alert('Oops! Something error. Please reload and try again.');
  }
}
