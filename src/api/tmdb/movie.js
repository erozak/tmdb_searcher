import { fromJS as beImmutable } from 'immutable';

import Axios from '@/utils/axios';

import { apiURL } from './config';

const movie = (id) => {
  const axiosWithUrl = Axios(`${apiURL.movie}/${id}`);
  /*
  * doc: https://developers.themoviedb.org/3/movies
  *
  * params = {
  *   api_key:              <string>,   // (required)
  *   language:             <string>,   // (optional) Pass a ISO 639-1 value to display translated data for the fields that support it.
  *   append_to_response:   <string>,   // (optional) Append requests within the same namespace to the response.
  * }
  */

  return axiosWithUrl()
    .then(response => response.data)
    .then(response => ({ response: beImmutable(response) }))
    .catch(error => error);
};

export default movie;
