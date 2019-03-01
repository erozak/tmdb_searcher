import { has, get } from 'lodash';

import { generateMockMovie, generateMockMovies } from '../../mocks/movie';
import { MOVIE_SCHEMA_NAME } from '../../schemas/movie';
import { normalizeMovie, normalizeMovies } from '../normalizeMovie';

describe('modules/TMDB/normalizeMovie', () => {
  describe('normalizeMovie', () => {

    it('should return a normalized data when receive an object.', () => {
      const movie = generateMockMovie();
      const data = normalizeMovie(movie);

      expect(data.result).toBe(movie.id);
      expect(has(data.entities, [MOVIE_SCHEMA_NAME, movie.id])).toBeTruthy();
      expect(get(data.entities, [MOVIE_SCHEMA_NAME, movie.id])).toEqual(movie);
    });
  });

  describe('normalizeMovies', () => {

    it('should return normalized data with an id list when receive objects.', () => {
      const size = 3;
      const movies = generateMockMovies(size);
      const data = normalizeMovies(movies);

      expect(data.result.length).toBe(size);

      movies.forEach(movie => {
        expect(data.result).toContain(movie.id);
        expect(has(data.entities, [MOVIE_SCHEMA_NAME, movie.id])).toBeTruthy();
        expect(get(data.entities, [MOVIE_SCHEMA_NAME, movie.id])).toEqual(movie);
      });
    });
  });
});
