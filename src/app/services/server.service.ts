import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetServerListInfo} from '../models/getServerListInfo';
import {environment} from '../../environments/environment';
import {GetClientInfo} from '../models/getClientInfo';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  getServerInfo(): Observable<GetServerListInfo> {
    return this.http.get<GetServerListInfo>(environment.apiBase.concat(environment.apiServerPath) + '/serverinfo');
  }

  getServerClients(): Observable<GetClientInfo> {
    return this.http.get<GetClientInfo>(environment.apiBase.concat(environment.apiServerPath) + '/clients');
  }
}
