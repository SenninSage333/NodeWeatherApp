import { CustomError } from './customError';

export class PageNotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super('Page not found.');
    Object.setPrototypeOf(this, PageNotFoundError.prototype);
  }

  serializeErrors = () => [{ message: 'Page not found.' }];
}
