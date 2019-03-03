/**
 * API Document: https://developers.themoviedb.org/3/
 */

import { SORT_OPTIONS } from './constants';
import resolveTMDBImage from './resolveTMDBImage';
import { GENRE_SCHEMA_NAME, IGenre } from './schemas/genre';
import { IMovie, MOVIE_SCHEMA_NAME, MOVIE_STATUS } from './schemas/movie';
import {
  IProductionCompany,
  PRODUCTION_COMPANY_SCHEMA_NAME,
} from './schemas/productionCompany';
import {
  IDiscoveryMovieQuery,
  IGetMovieQuery,
  ISearchMovieQuery,
  TMDB,
} from './TMDB';

export {
  resolveTMDBImage,
  SORT_OPTIONS,
  MOVIE_STATUS,
  TMDB,
  IMovie,
  IGenre,
  IProductionCompany,
  IDiscoveryMovieQuery,
  ISearchMovieQuery,
  IGetMovieQuery,
};

export const TMDB_SCHEMA_NAMES = {
  movies: MOVIE_SCHEMA_NAME,
  productionCompanies: PRODUCTION_COMPANY_SCHEMA_NAME,
  genres: GENRE_SCHEMA_NAME,
};
