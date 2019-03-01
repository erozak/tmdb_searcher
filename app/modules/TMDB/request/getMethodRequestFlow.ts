import { HTTP_CODE } from '../../Request';
import { RequestError } from '../../RequestError';
import handleNotFound from './handleNotFound';
import handleUnauthorized from './handleUnauthorized';

export default function getMethodRequestFlow(response: Response) {
  switch(response.status) {
    case HTTP_CODE.noContent:
    case HTTP_CODE.resetContent:
      return Promise.resolve(null);
    case HTTP_CODE.unauthorized:
      return handleUnauthorized(response);
    case HTTP_CODE.notFound:
      return handleNotFound(response);
    default:
      if (response.status >= HTTP_CODE.ok && response.status < HTTP_CODE.multipleChoices) {
        return response.json();
      }

      return Promise.reject(new RequestError(response));
  }
}
