import { HttpApi } from '@utils/api/HttpApi';
import { MOVIES_SERVER_URL } from '@utils/constants';

export class MoviesApi extends HttpApi {
  constructor() {
    super(MOVIES_SERVER_URL);
  }

  getMovies() {
    return this.sendRequest('beatfilm-movies', { method: 'GET' });
  }
}
