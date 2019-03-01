import { AUTH_ERROR_NAME } from './constants';

export class AuthError extends Error {
  public static match = (error: Error) => error.name === AUTH_ERROR_NAME;

  public readonly name = AUTH_ERROR_NAME;

  constructor(message: string) {
    super(message);
  }
}
