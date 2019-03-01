import assign from 'lodash/assign';
import get from 'lodash/get';

import { IMovie, MovieEntityPack } from '../schemas/movie';
import { normalizeMovies } from './normalizeMovie';

export interface IExpectedReceivedData {
  page: number;
  total_pages: number;
  total_results: number;
  results: object[]
}

export interface INormalizedMovieListData {
  page: number;
  total_pages: number;
  total_results: number;
  result: Array<IMovie['id']>,
  entities: MovieEntityPack,
};

export function normalizeMovieList(data: any): INormalizedMovieListData {
  const movies = get(data, 'results', []);
  const normalized = normalizeMovies(movies);

  return assign({}, data, normalized);
}
