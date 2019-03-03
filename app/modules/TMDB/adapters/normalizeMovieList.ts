import assign from 'lodash/assign';
import get from 'lodash/get';

import { INormalizedData } from '../../../globals';
import { IMovie, MovieEntityPack } from '../schemas/movie';
import { normalizeMovies } from './normalizeMovie';

export interface IExpectedReceivedData {
  page: number;
  total_pages: number;
  total_results: number;
  results: object[];
}

export interface ITMDBPagination {
  page: number;
  total_pages: number;
  total_results: number;
}

export type NormalizedMovieListData = ITMDBPagination &
  INormalizedData<MovieEntityPack, Array<IMovie['id']>>;

export function normalizeMovieList(data: any): NormalizedMovieListData {
  const movies = get(data, 'results', []);
  const normalized = normalizeMovies(movies);

  return assign({}, data, normalized);
}
