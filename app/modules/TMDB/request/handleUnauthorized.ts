import get from 'lodash/get';

import { AuthError } from '../../AuthError';
import checkCode from './checkCode';

export const INVALID_API_KEY_CODE = 7;

export default function handleUnauthorized(response: Response) {
  return checkCode(response, INVALID_API_KEY_CODE)
    .then((data: any) => {
      const message = get(data, 'status_message', 'Invalid API key: You must be granted a valid key.');

      throw new AuthError(message);
    });
}
