import { get, has } from 'lodash';

import { generateMockMovies } from '../../mocks/movie';
import { MOVIE_SCHEMA_NAME } from '../../schemas/movie';
import {
  IExpectedReceivedData,
  normalizeMovieList,
} from '../normalizeMovieList';

describe('modules/TMDB/adapters/normalizeMovieList', () => {
  it('should return a normalized data with pagination.', () => {
    const size = 3;
    const movies = generateMockMovies(size);
    const data: IExpectedReceivedData = {
      page: 1,
      results: movies,
      total_pages: 3,
      total_results: 3,
    };
    const normalized = normalizeMovieList(data);

    expect(normalized).not.toBe(data);
    expect(normalized).toMatchObject({
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
    });
    expect(normalized.result.length).toBe(size);
    expect(has(normalized.entities, MOVIE_SCHEMA_NAME)).toBeTruthy();

    movies.forEach(movie => {
      expect(normalized.result).toContain(movie.id);
      expect(get(normalized.entities, [MOVIE_SCHEMA_NAME, movie.id])).toEqual(
        movie,
      );
    });
  });
});
