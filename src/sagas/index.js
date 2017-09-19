import { all, fork } from 'redux-saga/effects';

import tmdbSaga from './TMDB';

export default function* rootSaga() {
  yield all([
    fork(tmdbSaga),
  ]);
}
