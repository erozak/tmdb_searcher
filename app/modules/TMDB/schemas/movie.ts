import { schema } from 'normalizr';

import { ObjectRecord, Integer, DateString } from '../../../globals';
import { IGenre, genreSchema, GenreEntityPack } from './genre';
import { IProductionCompany, productionCompanySchema, ProductionCompanyEntityPack } from './productionCompany';

export type MovieSchemaName = 'movies';
export const MOVIE_SCHEMA_NAME: MovieSchemaName = 'movies';

export enum MOVIE_STATUS {
  remored = 'Rumored',
  planned = 'Planned',
  inProduction = 'In Production',
  postProduction = 'Post Production',
  released = 'Released',
  cancelled = 'Canceled',
};

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface IMovie {
  id: Integer;
  adult: boolean;
  budget: number;
  genres: Array<IGenre['id']>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  production_companies: Array<IProductionCompany['id']>;
  production_countries: IProductionCountry[];
  release_date: DateString;
  revenue: Integer;
  spoken_languages: ISpokenLanguage[];
  status: MOVIE_STATUS;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: Integer;
  poster_path?: string | null;
  tagline?: string | null;
  runtime?: Integer | null;
  backdrop_path?: string | null;
  belongs_to_collection?: object | null;
  homepage?: string | null;
  imdb_id?: string | null;
}

export type MovieEntities = ObjectRecord<IMovie>;

interface IMovieEntityPack {
  movies: MovieEntities;
};
export type MovieEntityPack = IMovieEntityPack | GenreEntityPack | ProductionCompanyEntityPack;

const movieSchemaDefinition = {
  genres: [genreSchema],
  production_companies: [productionCompanySchema],
};

export const movieSchema = new schema.Entity(MOVIE_SCHEMA_NAME, movieSchemaDefinition);
