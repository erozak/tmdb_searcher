import { RequestError } from '../../../RequestError';
import checkCode from '../checkCode';

describe('modules/TMDB/request/checkCode', () => {
  it('should return parsed data when match code.', async () => {
    const code = 20;
    const data = { code, test: true };
    const response = new Response(JSON.stringify(data), { status: 200 });

    const result = await checkCode(response, code);

    expect(result).toEqual(data);
  });

  it('should throw Request Error when got unmatched code.', () => {
    const response = new Response(JSON.stringify({}), { status: 200 });

    return checkCode(response, 1).catch((error: Error) => {
      expect(RequestError.match(error)).toBeTruthy();
    });
  });
});
