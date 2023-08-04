import { HttpApi } from '@utils/api/HttpApi';
import { SERVER_URL } from '@utils/constants';

export class UserApi extends HttpApi {
  constructor() {
    super(SERVER_URL);
    this._options = { credentials: 'include' };
  }

  sendRequest(endpoint, options) {
    this._options = Object.assign(this._options, options);
    return super.sendRequest(endpoint, this._options);
  }

  getCurrentUser() {
    return this.sendRequest('users/me', { method: 'GET' });
  }

  updateCurrentUser(user) {
    return this.sendRequest('users/me', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
  }

  getMovies() {
    return this.sendRequest('movies', { method: 'GET' });
  }

  saveMovie(movie) {
    return this.sendRequest('movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    });
  }

  deleteMovie(movieId) {
    return this.sendRequest(`movies/${movieId}`, { method: 'DELETE' });
  }
}
