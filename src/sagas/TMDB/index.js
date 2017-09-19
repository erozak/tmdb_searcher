import { takeLatest } from 'redux-saga/effects';

import {
  TMDB_DETAIL_GET,
  TMDB_DISCOVER_GET,
  TMDB_INIT,
} from '../../constants/actionTypes';

import detailGet from './detailGet';
import discoverGet from './discoverGet';
import init from './init';

export default function* watchTmdbSaga() {
  yield takeLatest(TMDB_DETAIL_GET, detailGet);
  yield takeLatest(TMDB_DISCOVER_GET, discoverGet);
  yield takeLatest(TMDB_INIT, init);
}
