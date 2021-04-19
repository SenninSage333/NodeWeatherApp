import { CustomError } from './customError';

export class BadCoordinatesError extends CustomError {
  statusCode = 400;
  constructor() {
    super(
      'Bad coordinates. Longitude must be in range from -180 to 180 and latitude must be in range from -90 to 90.'
    );
    Object.setPrototypeOf(this, BadCoordinatesError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
