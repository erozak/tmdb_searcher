import Axios from 'axios';
import { fromJS as beImmutable } from 'immutable';

import TMDB from '@/constants/TMDB';

const movie = (id) => {
  /*
  * doc: https://developers.themoviedb.org/3/movies
  *
  * params = {
  *   api_key:              <string>,   // (required)
  *   language:             <string>,   // (optional) Pass a ISO 639-1 value to display translated data for the fields that support it.
  *   append_to_response:   <string>,   // (optional) Append requests within the same namespace to the response.
  * }
  */

  const config = {
    url: `/movie/${id}`,
    baseURL: TMDB.path.api,
    method: 'get',
    params: {
      api_key: TMDB.key,
    },
  };

  return Axios(config)
    .then(response => response.data)
    .then(response => ({ response: beImmutable(response) }))
    .catch(error => error);
};

export default movie;
