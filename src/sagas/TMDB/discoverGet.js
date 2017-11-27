import { call, put } from 'redux-saga/effects';

import {
  onTmdbDetailClear,
  onTmdbListClear,
  onTmdbListSave,
  onTmdbListAdd,
  onTmdbPageSet,
} from '@/actions';
import { discoverMovie as getDiscover } from '@/tmdbApi';
import discoverMovieFilter from './utils/discoverMovieFilter';

export default function* discoverGet({ payload: { options } }) {
  if (!options.page || options.page <= 1) {
    put(onTmdbListClear());
  }

  const { response, error } = yield call(getDiscover, options);

  if (response) {
    const { pagination, movies } = discoverMovieFilter(response);

    if (!options.page || options.page <= 1) {
      yield put(onTmdbListSave(movies));
      yield put(onTmdbDetailClear());
    } else {
      yield put(onTmdbListAdd(movies));
    }
    yield put(onTmdbPageSet(pagination));
  } else if (process.env.NODE_ENV === 'development') {
    console.error('[ERR][SAGA] Discover Get: ', options, error);
  } else {
    alert('Oops! Something error. Please reload and try again.');
  }
}
