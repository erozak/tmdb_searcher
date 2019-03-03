import {
  conformsTo,
  isArray,
  isBoolean,
  isNumber,
  isString,
  values,
} from 'lodash';

import { MOVIE_STATUS } from '../../schemas/movie';
import { mockMovie, mockProductionCountry, mockSpokenLanguage } from '../movie';

describe('modules/TMDB/mocks/productionCompany', () => {
  describe('mockProductionCountry', () => {
    it('should generate a productionCountry.', () => {
      const productionCountry = mockProductionCountry();

      const matched = conformsTo(productionCountry, {
        iso_3166_1: isString,
        name: isString,
      });

      expect(matched).toBeTruthy();
    });
  });

  describe('mockSpokenLanguage', () => {
    it('should generate a spokenLanguage.', () => {
      const spokenLanguage = mockSpokenLanguage();

      const matched = conformsTo(spokenLanguage, {
        iso_639_1: isString,
        name: isString,
      });

      expect(matched).toBeTruthy();
    });
  });

  describe('mockMovie', () => {
    it('should generate a movie.', () => {
      const movie = mockMovie();

      const matched = conformsTo(movie, {
        id: isNumber,
        adult: isBoolean,
        backdrop_path: isString,
        belongs_to_collection: (target: any) => target === null,
        budget: isNumber,
        genres: isArray,
        homepage: isString,
        imdb_id: isString,
        original_language: isString,
        original_title: isString,
        overview: isString,
        popularity: isNumber,
        poster_path: isString,
        production_companies: isArray,
        production_countries: isArray,
        release_date: isString,
        revenue: isNumber,
        runtime: (target: any) => isNumber(target) || target === null,
        spoken_languages: isArray,
        status: (target: any) =>
          values(MOVIE_STATUS).some(status => status === target),
        tagline: isString,
        title: isString,
        video: isBoolean,
        vote_average: isNumber,
        vote_count: isNumber,
      });

      expect(matched).toBeTruthy();
    });
  });
});
