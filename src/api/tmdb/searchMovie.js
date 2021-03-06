import { fromJS as beImmutable } from 'immutable';

import Axios from '@/utils/axios';

import { apiURL } from './config';

const searchMovie = (query, page) => {
  const axiosWithUrl = Axios(apiURL.search.movie);
  /*
  * doc: https://developers.themoviedb.org/3/search/search-movies
  *
  * params = {
  *   api_key:              <string>,   // (required)
  *   language:             <string>,   // (optional) Pass a ISO 639-1 value to display translated data for the fields that support it.
  *   query:                <string>,   // (required) Pass a text query to search. This value should be URI encoded.
  *   page:                 <integer>,  // (optional) Specify which page to query.
  *   include_adult:        <boolean>,  // (optional) Choose whether to include adult (pornography) content in the results.
  *   region:               <string>,   // (optional) Specify a ISO 3166-1 code to filter release dates. Must be uppercase.
  *   year:                 <integer>,  // (optional)
  *   primary_release_year: <integer>,  // (optional)
  * }
  */

  return axiosWithUrl({
    query,
    page,
  })
    .then(response => response.data)
    .then(response => ({ response: beImmutable(response) }))
    .catch(error => error);
};

export default searchMovie;
