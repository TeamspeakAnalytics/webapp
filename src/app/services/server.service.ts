import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {GetServerListInfo} from '../models/getServerListInfo';
import {environment} from '../../environments/environment';
import {GetClientInfo} from '../models/getClientInfo';
import {catchError} from 'rxjs/operators';
import {ApiBase} from '../models/api-base';
import {NotificationService} from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService extends ApiBase {

  constructor(private http: HttpClient, private notify: NotificationService) {
    super('TS Service', notify);
  }

  getServerInfo(): Observable<GetServerListInfo> {
    return this.http.get<GetServerListInfo>(environment.apiBase + '/server/serverinfo')
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.handleHttpErrorResponse(err);
          return of(null);
        })
      );
  }

  getServerClients(): Observable<GetClientInfo> {
    return this.http.get<GetClientInfo>(environment.apiBase + '/server/clients')
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.handleHttpErrorResponse(err);
          return of(null);
        })
      );
  }

}
