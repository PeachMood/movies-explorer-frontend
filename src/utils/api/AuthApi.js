import { HttpApi } from '@utils/api/HttpApi';
import { SERVER_URL } from '@utils/constants';

export class AuthApi extends HttpApi {
  constructor() {
    super(SERVER_URL);
    this._options = { credentials: 'include', };
  }

  sendRequest(endpoint, options) {
    this._options = Object.assign(this._options, options);
    return super.sendRequest(endpoint, this._options);
  }

  register(user) {
    return this.sendRequest('signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
  }

  login(user) {
    return this.sendRequest('signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
  }

  logout() {
    return this.sendRequest('signout', { method: 'POST' });
  }

  checkToken() {
    return this.sendRequest('users/me', { method: 'GET' });
  }
}
