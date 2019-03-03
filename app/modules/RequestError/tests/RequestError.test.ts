import { RequestError } from '../RequestError';

import { REQUEST_ERROR_NAME } from '../constants';

describe('modules/RequestError', () => {
  describe('static.match', () => {
    it('should return true when error name is match name of request error.', () => {
      const matchedError = new Error('test');
      matchedError.name = REQUEST_ERROR_NAME;

      expect(RequestError.match(matchedError)).toBeTruthy();

      const unmatchedError = new Error('test');

      expect(RequestError.match(unmatchedError)).toBeFalsy();
    });
  });

  it('should create a error with request error name and response.', () => {
    const response = new Response('test', {
      status: 404,
      statusText: 'Found nothing',
    });
    const error = new RequestError(response);

    expect(error).toHaveProperty('name', REQUEST_ERROR_NAME);
    expect(error).toHaveProperty('response', response);
  });
});
