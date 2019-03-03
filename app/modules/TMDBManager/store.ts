import assign from 'lodash/assign';

import { GenreEntities } from '..//TMDB/schemas/genre';
import { MovieEntities } from '..//TMDB/schemas/movie';
import { ProductionCompanyEntities } from '..//TMDB/schemas/productionCompany';
import { IMovie, TMDB_SCHEMA_NAMES } from '../TMDB';

export interface ITMDBEntitiesState {
  genres: GenreEntities | {};
  movies: MovieEntities | {};
  productionCompanies: ProductionCompanyEntities | {};
}

export interface IPaginationState<T> {
  currentPage: number;
  pages: number;
  size: number;
  result: T[][];
}

export interface ITMDBSearchState extends IPaginationState<IMovie['id']> {
  query: string;
}

export interface ITMDBStore {
  entities: ITMDBEntitiesState;
  search: ITMDBSearchState;
  discovery: IPaginationState<IMovie['id']>;
}

export const defaultPagination = <T>(): IPaginationState<T> => ({
  currentPage: 0,
  pages: 0,
  size: 0,
  result: [],
});

export const defaultTMDBStore: ITMDBStore = {
  entities: {
    [TMDB_SCHEMA_NAMES.genres]: {},
    [TMDB_SCHEMA_NAMES.movies]: {},
    [TMDB_SCHEMA_NAMES.productionCompanies]: {},
  },
  search: assign(defaultPagination<IMovie['id']>(), {
    query: '',
  }),
  discovery: defaultPagination<IMovie['id']>(),
};
