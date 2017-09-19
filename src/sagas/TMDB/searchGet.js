import { call, put } from 'redux-saga/effects';

import {
  onTmdbListClear,
  onTmdbListSave,
} from '../../actions';
import { searchMovie as getSearchMovie } from '../../tmdbApi';

export default function* searchGet({ payload: { query, page } }) {
  put(onTmdbListClear());

  const { response, error } = yield call(getSearchMovie, query, page);

  if (response.isEmpty()) {
    console.err(`[ERR][SAGA] Search Get: ${query}, page(${page})`, error);
  } else {
    yield put(onTmdbListSave(response));
  }
}
