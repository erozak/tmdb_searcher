import { normalize } from 'normalizr';
import isArray from 'lodash/isArray';

import { movieSchema, IMovie, MovieEntityPack } from '../schemas/movie';

export interface INormalizedMovieData {
  result: IMovie['id'],
  entities: MovieEntityPack,
};

export function normalizeMovie(data: any): INormalizedMovieData {
  return normalize(data, movieSchema);
}

export interface INormalizedMoviesData {
  result: Array<IMovie['id']>,
  entities: MovieEntityPack,
};

export function normalizeMovies(data: any[]): INormalizedMoviesData {
  const movies = isArray(data) ? data : [data];

  return normalize(movies, [movieSchema]);
}
