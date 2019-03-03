import { AuthError } from '../AuthError';

import { AUTH_ERROR_NAME } from '../constants';

describe('modules/AuthError', () => {
  describe('static.match', () => {
    it('should return true when error name is match name of request error.', () => {
      const matchedError = new Error('test');
      matchedError.name = AUTH_ERROR_NAME;

      expect(AuthError.match(matchedError)).toBeTruthy();

      const unmatchedError = new Error('test');

      expect(AuthError.match(unmatchedError)).toBeFalsy();
    });
  });

  it('should create a error with specified message.', () => {
    const message = 'test';
    const error = new AuthError(message);

    expect(error).toHaveProperty('name', AUTH_ERROR_NAME);
    expect(error).toHaveProperty('message', message);
  });
});
