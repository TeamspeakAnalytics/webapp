import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private snackBarStandardDuration = 2500;

  constructor(private snackBar: MatSnackBar) {
  }

  success(msg: string, action?: string, duration: number = this.snackBarStandardDuration): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(msg, action, {duration: duration, panelClass: 'success'});
  }

  error(msg: string, action?: string, duration: number = this.snackBarStandardDuration): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(msg, action, {duration: duration, panelClass: 'error'});
  }

  warning(msg: string, action?: string, duration: number = this.snackBarStandardDuration): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(msg, action, {duration: duration, panelClass: 'warning'});
  }

  information(msg: string, action?: string, duration: number = this.snackBarStandardDuration): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(msg, action, {duration: duration, panelClass: 'information'});
  }
}
