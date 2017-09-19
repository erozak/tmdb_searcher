import { call, put } from 'redux-saga/effects';

import {
  onTmdbListClear,
  onTmdbListSave,
  onTmdbPageSet,
} from '../../actions';
import { discoverMovie as getDiscover } from '../../tmdbApi';
import discoverMovieFilter from './utils/discoverMovieFilter';

export default function* discoverGet({ payload: { options } }) {
  put(onTmdbListClear());

  const { response, error } = yield call(getDiscover, options);

  if (response.isEmpty()) {
    console.err('[ERR][SAGA] Discover Get: ', options, error);
  } else {
    const { pagination, movies } = discoverMovieFilter(response);

    yield put(onTmdbListSave(movies));
    yield put(onTmdbPageSet(pagination));
  }
}
