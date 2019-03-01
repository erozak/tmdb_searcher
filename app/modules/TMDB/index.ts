/**
 * API Document: https://developers.themoviedb.org/3/
 */

import resolveTMDBImage from './resolveTMDBImage';
import { MOVIE_SCHEMA_NAME, IMovie, MOVIE_STATUS } from './schemas/movie';
import { GENRE_SCHEMA_NAME, IGenre } from './schemas/genre';
import { PRODUCTION_COMPANY_SCHEMA_NAME, IProductionCompany } from './schemas/productionCompany';
import { TMDB } from './TMDB';
import { SORT_OPTIONS } from './constants';

export { resolveTMDBImage, SORT_OPTIONS, MOVIE_STATUS, TMDB, IMovie, IGenre, IProductionCompany };

export const TMDB_SCHEMA_NAMES = {
  movies: MOVIE_SCHEMA_NAME,
  productionCompanies: PRODUCTION_COMPANY_SCHEMA_NAME,
  genres: GENRE_SCHEMA_NAME,
};
