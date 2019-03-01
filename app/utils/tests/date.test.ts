import { isString } from 'lodash';

import { formatAsISO8601Date } from '../date';

describe('utils/date', () => {
  describe('formatAsISO8601Date', () => {
    it('should return a date string of ISO 8601.', () => {
      const date = new Date('1911/01/01 00:00:00');
      const formatted = formatAsISO8601Date(date);

      expect(isString(formatted)).toBeTruthy();
      expect(formatted).toMatch('1911-01-01');
    });
  });
});
