import get from 'lodash/get';

import { RequestError } from '../../RequestError';

export default function checkCode(response: Response, code: number) {
  return response.json().then(data => {
    const got = get(data, 'code');

    if (got === code) {
      return data;
    }

    throw new RequestError(response);
  });
}
