import { conformsTo, isNumber, isString } from 'lodash'

import { mockGenre } from '../genre';

describe('modules/TMDB/mocks/genre', () => {
  describe('mockGenre', () => {
    it('should generate a genre.', () => {
      const genre = mockGenre();

      const matched = conformsTo(genre, {
        id: isNumber,
        name: isString,
      });

      expect(matched).toBeTruthy();
    });
  });
});
