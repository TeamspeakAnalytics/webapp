import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const expectedRole = next.data.expectedRole;
    const roles = this.auth.getSessionRoles();
    if (!this.auth.isSignedIn() || roles.indexOf(expectedRole) === -1) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
