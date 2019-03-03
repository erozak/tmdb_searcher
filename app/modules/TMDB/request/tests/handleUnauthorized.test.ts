import { AuthError } from '../../../AuthError';
import { HTTP_CODE } from '../../../Request';
import handleUnauthorized, {
  INVALID_API_KEY_CODE,
} from '../handleUnauthorized';

describe('modules/TMDB/request/handleUnauthorized', () => {
  it('should throw AuthError when code matched.', () => {
    const data = { code: INVALID_API_KEY_CODE };
    const response = new Response(JSON.stringify(data), {
      status: HTTP_CODE.unauthorized,
    });

    return handleUnauthorized(response).catch((error: Error) => {
      expect(AuthError.match(error)).toBeTruthy();
    });
  });
});
