import isArray from 'lodash/isArray';
import { normalize } from 'normalizr';

import { INormalizedData } from '../../../globals';
import { IMovie, MovieEntityPack, movieSchema } from '../schemas/movie';

export type NormalizedMovieData = INormalizedData<
  MovieEntityPack,
  IMovie['id']
>;

export function normalizeMovie(data: any): NormalizedMovieData {
  return normalize(data, movieSchema);
}

export type NormalizedMoviesData = INormalizedData<
  MovieEntityPack,
  Array<IMovie['id']>
>;

export function normalizeMovies(data: any[]): NormalizedMoviesData {
  const movies = isArray(data) ? data : [data];

  return normalize(movies, [movieSchema]);
}
