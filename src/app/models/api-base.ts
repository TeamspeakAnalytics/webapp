import {HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {NotificationService} from '../services/notification.service';

export class ApiBase {

  private _isAvailable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isAvailable: Observable<boolean> = this._isAvailable.asObservable();

  constructor(private serviceName: string, private _notify: NotificationService) {
  }

  protected handleHttpErrorResponse(err: HttpErrorResponse): void {
    const badResponseCodes: number[] = [0, 500];
    if (badResponseCodes.indexOf(err.status) !== -1) {
      this._isAvailable.next(false);
      this._notify.error(`${this.serviceName} is currently not available.`);
    }
  }
}
