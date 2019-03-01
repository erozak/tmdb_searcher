import { REQUEST_ERROR_NAME } from './constants';

export class RequestError extends Error {
  public static match = (error: Error) => error.name === REQUEST_ERROR_NAME;

  public readonly name = REQUEST_ERROR_NAME;

  constructor(public readonly response: Response) {
    super(response.statusText);
  }
}
