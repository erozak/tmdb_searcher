import { uniqueId } from 'lodash';
import nock = require('nock');

import { IExpectedReceivedData } from '../adapters/normalizeMovieList';
import { SORT_OPTIONS, TMDB_API_HOST, TMDB_API_VERSION } from '../constants';
import { generateMockMovie, generateMockMovies } from '../mocks/movie';
import { TMDB } from '../TMDB';

const tmdbNode = (node: string) => '/' + TMDB_API_VERSION.toString() + node;

describe('modules/TMDB', () => {
  const API_KEY = 'test';
  const tmdb = new TMDB(API_KEY);
  const tmdbNock = nock(TMDB_API_HOST).defaultReplyHeaders({
    'access-control-allow-origin': '*',
  });

  beforeAll(() => {
    nock.disableNetConnect();
  });

  afterAll(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  describe('static properties', () => {
    it('could get tmdb api version and host.', () => {
      expect(TMDB.host).toBe(TMDB_API_HOST);
      expect(TMDB.version).toBe(TMDB_API_VERSION);
    });
  });

  it('should generate a TMDB service with specified API key.', () => {
    expect(tmdb.apiKey).toBe(API_KEY);
  });

  describe('url', () => {
    it('should return an URL with api_key query and specified node.', () => {
      const node = '/test';
      const url = tmdb.url(node);

      expect(url.searchParams.has('api_key')).toBeTruthy();
      expect(url.pathname).toBe(tmdbNode(node));
      expect(url.origin).toBe(TMDB_API_HOST);
    });
  });

  describe('get', () => {
    it('should send request to specified url.', async () => {
      const node = '/test';
      const url = tmdb.url(node);
      const data = { success: true };

      tmdbNock
        .get(tmdbNode(node))
        .query({ api_key: API_KEY })
        .reply(200, data);

      const reply = await tmdb.get(url);

      expect(reply).toEqual(reply);
    });
  });

  describe('searchMovie', () => {
    it('should return normalized movie list.', async () => {
      const size = 5;
      const movies = generateMockMovies(size, () => ({
        id: Number(uniqueId()),
      }));
      const search = 'test';
      const data: IExpectedReceivedData = {
        page: 1,
        results: movies,
        total_pages: 1,
        total_results: size,
      };

      tmdbNock
        .get(tmdbNode('/search/movie'))
        .query({
          api_key: API_KEY,
          query: search,
          page: 1,
          include_adult: true,
        })
        .reply(200, data);

      const reply = await tmdb.searchMovie(search);

      expect(reply).toMatchObject({
        page: reply.page,
        total_pages: reply.total_pages,
        total_results: reply.total_results,
      });
      movies.forEach(movie => {
        expect(reply.result).toContain(movie.id);
      });
    });
  });

  describe('discoverMovies', () => {
    it('should return normalized movie list.', async () => {
      const size = 5;
      const movies = generateMockMovies(size, () => ({
        id: Number(uniqueId()),
      }));
      const data: IExpectedReceivedData = {
        page: 1,
        results: movies,
        total_pages: 1,
        total_results: size,
      };

      tmdbNock
        .get(tmdbNode('/discover/movie'))
        .query({
          api_key: API_KEY,
          page: 1,
          sort_by: SORT_OPTIONS.descendingByPopularity,
          include_adult: true,
          include_video: false,
        })
        .reply(200, data);

      const reply = await tmdb.discoverMovies();

      expect(reply).toMatchObject({
        page: reply.page,
        total_pages: reply.total_pages,
        total_results: reply.total_results,
      });
      movies.forEach(movie => {
        expect(reply.result).toContain(movie.id);
      });
    });
  });

  describe('discoverMovies', () => {
    it('should return normalized movie list.', async () => {
      const size = 5;
      const movies = generateMockMovies(size, () => ({
        id: Number(uniqueId()),
      }));
      const data: IExpectedReceivedData = {
        page: 1,
        results: movies,
        total_pages: 1,
        total_results: size,
      };

      tmdbNock
        .get(tmdbNode('/discover/movie'))
        .query({
          api_key: API_KEY,
          page: 1,
          sort_by: SORT_OPTIONS.descendingByPopularity,
          include_adult: true,
          include_video: false,
        })
        .reply(200, data);

      const reply = await tmdb.discoverMovies();

      expect(reply).toMatchObject({
        page: reply.page,
        total_pages: reply.total_pages,
        total_results: reply.total_results,
      });
      movies.forEach(movie => {
        expect(reply.result).toContain(movie.id);
      });
    });
  });

  describe('getMovie', () => {
    it('should return normalized movie list.', async () => {
      const movie = generateMockMovie();

      tmdbNock
        .get(tmdbNode(`/movie/${movie.id.toString()}`))
        .query({
          api_key: API_KEY,
        })
        .reply(200, movie);

      const reply = await tmdb.getMovie(movie.id);

      expect(reply).toMatchObject({
        result: movie.id,
      });
    });
  });
});
