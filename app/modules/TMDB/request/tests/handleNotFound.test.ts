import { HTTP_CODE } from '../../../Request';
import handleNotFound, { NO_RESULT_CODE } from '../handleNotFound';

describe('modules/TMDB/request/handleNotFound', () => {
  it('should return null when match code.', async () => {
    const data = { code: NO_RESULT_CODE };
    const response = new Response(JSON.stringify(data), { status: HTTP_CODE.notFound });

    const result = await handleNotFound(response);

    expect(result).toEqual(null);
  });
});
