import { getName as toLanguageName } from 'iso-639-1';
import { call, put } from 'redux-saga/effects';
import { fromJS as beImmutable } from 'immutable';

import {
  onTmdbDetailClear,
  onTmdbDetailSave,
} from '@/actions';
import { getMovie } from '@/api/tmdb';

export default function* detailGet({ payload: { id } }) {
  put(onTmdbDetailClear());

  const { response, error } = yield call(getMovie, id);

  if (response) {
    const detail = beImmutable({
      adult: response.get('adult'),
      backdrop: response.get('backdrop_path'),
      genres: response.get('genres').map(item => item.get('name')),
      id: response.get('id'),
      language: toLanguageName(response.get('original_language')),
      title: response.get('title') || response.get('original_title'),
      overview: response.get('overview'),
      poster: response.get('poster_path'),
      release: response.get('release_date'),
      runtime: response.get('runtime'),
      tagline: response.get('tagline'),
      rate: response.get('vote_average'),
    });

    yield put(onTmdbDetailSave(detail));
  } else if (process.env.NODE_ENV === 'development') {
    console.error('[ERR][SAGA] Detail Get : ', error);
  } else {
    alert('Oops! Something error. Please reload and try again.');
  }
}
