import checkCode from './checkCode';

export const NO_RESULT_CODE = 34;

export default function handleNotFound(response: Response) {
  return checkCode(response, NO_RESULT_CODE).then((): null => null);
}
