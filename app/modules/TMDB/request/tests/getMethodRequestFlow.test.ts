import { AuthError } from '../../../AuthError';
import { HTTP_CODE } from '../../../Request';
import { RequestError } from '../../../RequestError';
import getMethodRequestFlow from '../getMethodRequestFlow';
import { NO_RESULT_CODE } from '../handleNotFound';
import { INVALID_API_KEY_CODE } from '../handleUnauthorized';

describe('modules/TMDB/request/getMethodRequestFlow', () => {
  it('should return null when status is 204.', () => {
    const response = new Response(JSON.stringify({}), {
      status: HTTP_CODE.noContent,
    });

    return getMethodRequestFlow(response).then((data: any) => {
      expect(data).toBe(null);
    });
  });

  it('should return null when status is 205.', () => {
    const response = new Response(JSON.stringify({}), {
      status: HTTP_CODE.resetContent,
    });

    return getMethodRequestFlow(response).then((data: any) => {
      expect(data).toBe(null);
    });
  });

  it('should return null when status is 404 and code matched.', () => {
    const data = {
      code: NO_RESULT_CODE,
    };
    const response = new Response(JSON.stringify(data), {
      status: HTTP_CODE.notFound,
    });

    return getMethodRequestFlow(response).then((data: any) => {
      expect(data).toBe(null);
    });
  });

  it('should throw AuthError when status is 401 and code matched.', () => {
    const data = {
      code: INVALID_API_KEY_CODE,
    };
    const response = new Response(JSON.stringify(data), {
      status: HTTP_CODE.unauthorized,
    });

    return getMethodRequestFlow(response).catch((error: Error) => {
      expect(AuthError.match(error)).toBeTruthy();
    });
  });

  it('should throw RequestError when status is not in range from 200 to 300.', () => {
    const data = {};
    const response = new Response(JSON.stringify(data), {
      status: 500,
    });

    return getMethodRequestFlow(response).catch((error: Error) => {
      expect(RequestError.match(error)).toBeTruthy();
    });
  });

  it('should return data when is in range from 200 to 300.', () => {
    const data = {
      test: true,
    };
    const response = new Response(JSON.stringify(data), {
      status: HTTP_CODE.ok,
    });

    return getMethodRequestFlow(response).then((reply: any) => {
      expect(reply).toEqual(data);
    });
  });
});
