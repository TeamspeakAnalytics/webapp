import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthRequest} from '../models/authRequest';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ApiBase} from '../models/api-base';
import {NotificationService} from './notification.service';
import * as decode from 'jwt-decode';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiBase {

  private readonly localStorageAuthTokenKey = 'ts.analytics.auth.token';
  private readonly authRequest = '/auth/requestjwttoken';

  constructor(private httpClient: HttpClient, notify: NotificationService) {
    super('AuthService', notify);
  }

  login(username: string, password: string, stay?: boolean): Observable<boolean> {
    // TODO: Support stay
    const authRequest: AuthRequest = {
      username: username,
      password: password
    };
    return this.httpClient.post(environment.apiBase.concat(this.authRequest), authRequest).pipe(
      map((res) => {
        if (res) {
          localStorage.setItem(this.localStorageAuthTokenKey, res['token']);
          return true;
        }
        return false;
      }),
      catchError(err => {
        this.handleHttpErrorResponse(err);
        return of(null);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.localStorageAuthTokenKey);
  }

  isSignedIn(): boolean {
    const payload = this.getSessionPayload();

    if (!payload) {
      return false;
    }

    const expires = moment.unix(parseInt(payload['exp'], 0));
    if (moment().isBefore(expires)) {
      return true;
    }

    return false;
  }

  getSessionRoles(): string[] {
    if (!this.isSignedIn()) {
      return [];
    }
    const payload = this.getSessionPayload();
    // TODO: Wait until backend supports roles
    return ['admin'];
  }

  private getSessionPayload(): { [key: string]: string } {
    // TODO: Add types
    if (localStorage.getItem(this.localStorageAuthTokenKey)) {
      return decode(localStorage.getItem(this.localStorageAuthTokenKey));
    }
    return null;
  }
}
