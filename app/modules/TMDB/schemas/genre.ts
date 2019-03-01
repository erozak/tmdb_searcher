import { schema } from 'normalizr';

import { ObjectRecord, Integer } from '../../../globals';

export const GENRE_SCHEMA_NAME = 'genres';

export interface IGenre {
  id: Integer;
  name: string;
}

export type GenreEntities = ObjectRecord<IGenre>;

interface IGenreEntityPack {
  genres: GenreEntities;
};
export type GenreEntityPack = IGenreEntityPack;

export const genreSchema = new schema.Entity(GENRE_SCHEMA_NAME);
