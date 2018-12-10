import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {QuickAccessItem} from './quick-access/quick-access.component';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  readonly quickAccessItems: QuickAccessItem[] = [
    {title: 'Dashboard', icon: 'dashboard', routerLink: '/dashboard'},
    {title: 'Statistics', icon: 'show_chart', routerLink: '/stats'}
  ];

  get userIconLink(): string {
    return this.authService.isSignedIn() ? '/profile' : '/login';
  }

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {
    this.authService.getSessionRoles();
  }
}
