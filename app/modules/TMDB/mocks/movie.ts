import * as faker from 'faker';
import { sample, uniqueId } from 'lodash';

import { formatAsISO8601Date } from '../../../utils/date';
import { generateMulti, generateOne } from '../../../utils/generator';

import { MOVIE_STATUS } from '../schemas/movie';
import { generateMockGenres } from './genre';
import { generateMockProductionCompanies } from './productionCompany';

export const mockProductionCountry = () => ({
  iso_3166_1: faker.address.countryCode(),
  name: faker.address.country(),
});

export const generateMockProductionCountry = generateOne(mockProductionCountry);
export const generateMockProductionCountries = generateMulti(
  mockProductionCountry,
);

export const mockSpokenLanguage = () => ({
  iso_639_1: faker.random.locale(),
  name: faker.random.word(),
});

export const generateMockSpokenLanguage = generateOne(mockSpokenLanguage);
export const generateMockSpokenLanguages = generateMulti(mockSpokenLanguage);

export function mockMovie() {
  const id = Number(uniqueId());
  const belongs_to_collection: null = null;
  const sizeOfGenres = faker.random.number({ max: 6, min: 1, precision: 0 });
  const sizeOfProductionCompany = faker.random.number({
    max: 3,
    min: 1,
    precision: 0,
  });
  const sizeOfProductionCountry = faker.random.number({
    max: 5,
    min: 1,
    precision: 0,
  });
  const sizeOfSpokenLanguages = faker.random.number({
    max: 8,
    min: 1,
    precision: 0,
  });

  return {
    id,
    belongs_to_collection,
    adult: faker.random.boolean(),
    backdrop_path: faker.random.boolean()
      ? `/${faker.system.fileName('jpg')}`
      : '',
    budget: faker.random.number({ max: 100, min: 1, precision: 0 }) * 10 ** 5,
    genres: generateMockGenres(sizeOfGenres),
    homepage: faker.random.boolean() ? faker.internet.url() : '',
    imdb_id: faker.random.boolean() ? `tt${id}` : '',
    original_language: faker.random.locale(),
    original_title: faker.random.word(),
    overview: faker.lorem.paragraph(
      faker.random.number({ min: 3, max: 5, precision: 0 }),
    ),
    popularity: faker.random.number({ min: 0, max: 1, precision: 3 }),
    poster_path: faker.random.boolean()
      ? `/${faker.system.fileName('jpg')}`
      : '',
    production_companies: generateMockProductionCompanies(
      sizeOfProductionCompany,
    ),
    production_countries: generateMockProductionCountries(
      sizeOfProductionCountry,
    ),
    release_date: formatAsISO8601Date(
      faker.date.between('1911-1-1', faker.date.future(6)),
    ),
    revenue: faker.random.number({ max: 10 ** 12, min: 10 ** 9, precision: 0 }),
    runtime: faker.random.boolean()
      ? faker.random.number({ max: 300, min: 80, precision: 0 })
      : null,
    spoken_languages: generateMockSpokenLanguages(sizeOfSpokenLanguages),
    status: sample(MOVIE_STATUS),
    tagline: faker.random.boolean() ? faker.lorem.sentence() : '',
    title: faker.commerce.productName(),
    video: faker.random.boolean(),
    vote_average: faker.random.number({ max: 10, min: 0, precision: 0 }),
    vote_count: faker.random.number({ max: 10 ** 5, min: 1, precision: 0 }),
  };
}

export const generateMockMovie = generateOne(mockMovie);
export const generateMockMovies = generateMulti(mockMovie);
