import Axios from 'axios';
import { fromJS as beImmutable } from 'immutable';

import TMDB from '@/constants/TMDB';

const discoverMovie = (options) => {
  /*
  * doc: https://developers.themoviedb.org/3/discover
  *
  * params = {
  *   api_key:                  <string>    // (required)    1 validations
  *   language:                 <string>    // (optional)    Specify a language to query translatable fields with.
  *   region:                   <string>    // (optional)    Specify a ISO 3166-1 code to filter release dates. Must be uppercase.
  *   sort_by:                  <string>    // (optional)    Choose from one of the many available sort options.
  *   certification_country:    <string>    // (optional)    Used in conjunction with the certification filter, use this to specify a country with a valid certification.
  *   certification:            <string>    // (optional)    Filter results with a valid certification from the 'certification_country' field.
  *   certification.lte:        <string>    // (optional)    Filter and only include movies that have a certification that is less than or equal to the specified value.
  *   include_adult:            <boolean>   // (optional)    A filter and include or exclude adult movies.
  *   include_video:            <boolean>   // (optional)    A filter to include or exclude videos.
  *   page:                     <integer>   // (optional)    Specify the page of results to query.
  *   primary_release_year:     <integer>   // (optional)    A filter to limit the results to a specific primary release year.
  *   primary_release_date.gte: <string>    // (optional)    Filter and only include movies that have a primary release date that is greater or equal to the specified value.
  *   primary_release_date.lte: <string>    // (optional)    Filter and only include movies that have a primary release date that is less than or equal to the specified value.
  *   release_date.gte:         <string>    // (optional)    Filter and only include movies that have a release date (looking at all release dates) that is greater or equal to the specified value.
  *   release_date.lte:         <string>    // (optional)    Filter and only include movies that have a release date (looking at all release dates) that is less than or equal to the specified value.
  *   vote_count.gte:           <integer>   // (optional)    Filter and only include movies that have a vote count that is greater or equal to the specified value.
  *   vote_count.lte:           <integer>   // (optional)    Filter and only include movies that have a vote count that is less than or equal to the specified value.
  *   vote_average.gte:         <number>    // (optional)    Filter and only include movies that have a rating that is greater or equal to the specified value.
  *   vote_average.lte:         <number>    // (optional)    Filter and only include movies that have a rating that is less than or equal to the specified value.
  *   with_cast:                <string>    // (optional)    A comma separated list of person ID's. Only include movies that have one of the ID's added as an actor.
  *   with_crew:                <string>    // (optional)    A comma separated list of person ID's. Only include movies that have one of the ID's added as a crew member.
  *   with_companies:           <string>    // (optional)    A comma separated list of production company ID's. Only include movies that have one of the ID's added as a production company.
  *   with_genres:              <string>    // (optional)    Comma separated value of genre ids that you want to include in the results.
  *   with_keywords:            <string>    // (optional)    A comma separated list of keyword ID's. Only include movies that have one of the ID's added as a keyword.
  *   with_people:              <string>    // (optional)    A comma separated list of person ID's. Only include movies that have one of the ID's added as a either a actor or a crew member.
  *   year:                     <integer>   // (optional)    A filter to limit the results to a specific year (looking at all release dates).
  *   without_genres:           <string>    // (optional)    Comma separated value of genre ids that you want to exclude from the results.
  *   with_runtime.gte:         <integer>   // (optional)    Filter and only include movies that have a runtime that is greater or equal to a value.
  *   with_runtime.lte:         <integer>   // (optional)    Filter and only include movies that have a runtime that is less than or equal to a value.
  *   with_release_type:        <integer>   // (optional)    Specify a comma (AND) or pipe (OR) separated value to filter release types by. These release types map to the same values found on the movie release date method.
  *   with_original_language:   <string>    // (optional)    Specify an ISO 639-1 string to filter results by their original language value.
  *   without_keywords:         <string>    // (optional)    Exclude items with certain keywords. You can comma and pipe seperate these values to create an 'AND' or 'OR' logic.
  * }
  */

  const config = {
    url: '/discover/movie',
    baseURL: TMDB.path.api,
    method: 'get',
    params: {
      api_key: TMDB.key,
      ...options,
    },
  };

  return Axios(config)
    .then(response => response.data)
    .then(response => ({ response: beImmutable(response) }))
    .catch(error => error);
};

export default discoverMovie;
