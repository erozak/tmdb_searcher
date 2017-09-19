import { getName as toLanguageName } from 'iso-639-1';
import { Map } from 'immutable';

export default function discoverMovieFilter(response) {
  return {
    pagination: Map({
      total: response.get('total_pages'),
      page: response.get('page'),
    }),
    movies: response.get('results').map(movie => Map({
      id: movie.get('id'),
      vote: movie.get('vote_average'),
      title: movie.get('title') || movie.get('original_title'),
      poster: movie.get('poster_path'),
      adult: movie.get('adult'),
      language: toLanguageName(movie.get('original_language')),
      backdrop: movie.get('backdrop_path'),
      release: movie.get('release_date'),
    })),
  };
}
