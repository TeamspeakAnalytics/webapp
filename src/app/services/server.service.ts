import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {GetServerListInfo} from '../models/getServerListInfo';
import {environment} from '../../environments/environment';
import {GetClientInfo} from '../models/getClientInfo';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private _isAvailable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isAvailable: Observable<boolean> = this._isAvailable.asObservable();

  constructor(private http: HttpClient) {
  }

  getServerInfo(): Observable<GetServerListInfo> {
    return this.http.get<GetServerListInfo>(environment.apiBase.concat(environment.apiServerPath) + '/serverinfo')
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this._isAvailable.next(false);
          return null;
        })
      );
  }

  getServerClients(): Observable<GetClientInfo> {
    return this.http.get<GetClientInfo>(environment.apiBase.concat(environment.apiServerPath) + '/clients')
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this._isAvailable.next(false);
          return null;
        })
      );
  }
}
