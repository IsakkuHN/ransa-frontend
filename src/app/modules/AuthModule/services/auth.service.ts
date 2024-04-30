import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../../../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private ENDPOINT_STRING = 'http://localhost:3000' + '/api/auth';

  constructor(private httpClient: HttpClient) {}

  login(loginCredentials: LoginCredentials) {
    return this.httpClient.post(
      this.ENDPOINT_STRING + '/login',
      loginCredentials
    );
  }

  static isUserAuthenticated(): boolean {
    const user = localStorage.getItem('token');

    if (user) {
      return true;
    }
    return false;
  }
}
