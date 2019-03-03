import { schema } from 'normalizr';

import { Integer, ObjectRecord } from '../../../globals';

export type GenreSchemaName = 'genres';
export const GENRE_SCHEMA_NAME: GenreSchemaName = 'genres';

export interface IGenre {
  id: Integer;
  name: string;
}

export type GenreEntities = ObjectRecord<IGenre>;

interface IGenreEntityPack {
  genres: GenreEntities;
}
export type GenreEntityPack = IGenreEntityPack;

export const genreSchema = new schema.Entity(GENRE_SCHEMA_NAME);
