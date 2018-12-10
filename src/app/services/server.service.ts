import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {GetServerListInfo} from '../models/getServerListInfo';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {ApiBase} from '../models/api-base';
import {NotificationService} from './notification.service';
import {GetClientDetailedInfo} from '../models/getClientDetailedInfo';
import {GetChannelListInfo} from '../models/getChannelListInfo';
import {GetServerGroupListInfo} from '../models/getServerGroupListInfo';
import {GetServerGroupClientList} from '../models/getServerGroupClientList';

@Injectable({
  providedIn: 'root'
})
export class ServerService extends ApiBase {

  private readonly apiPath = environment.apiBase + '/server';

  constructor(private http: HttpClient, private notify: NotificationService) {
    super('TS Service', notify);
  }

  getServerClients(onlyVoiceClients: boolean): Observable<GetClientDetailedInfo[]> {
    return this.http.get<GetClientDetailedInfo[]>(this.apiPath + '/clients').pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleHttpErrorResponse(err);
        return of(null);
      })
    );
  }

  getServerClient(clientDbId: number): Observable<GetClientDetailedInfo> {
    return this.http.get<GetClientDetailedInfo>(this.apiPath + '/clients/' + clientDbId.toString()).pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleHttpErrorResponse(err);
        return of(null);
      })
    );
  }

  getServerInfo(): Observable<GetServerListInfo> {
    return this.http.get<GetServerListInfo>(this.apiPath + '/serverinfo')
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.handleHttpErrorResponse(err);
          return of(null);
        })
      );
  }

  getServerChannels(): Observable<GetChannelListInfo[]> {
    return this.http.get<GetChannelListInfo[]>(this.apiPath + '/channels').pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleHttpErrorResponse(err);
        return of(null);
      })
    );
  }

  getServerGroups(): Observable<GetServerGroupListInfo[]> {
    return this.http.get<GetServerGroupListInfo[]>(this.apiPath + '/groups').pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleHttpErrorResponse(err);
        return of(null);
      })
    );
  }

  getServerGroupClients(groupId: number): Observable<GetServerGroupClientList[]> {
    return this.http.get<GetServerGroupListInfo[]>(this.apiPath + `/groups/${groupId.toString()}/clients`).pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleHttpErrorResponse(err);
        return of(null);
      })
    );
  }

}
