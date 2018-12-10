import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  stay = true;

  constructor(private authService: AuthService, private router: Router, private notify: NotificationService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.username, this.password, this.stay).subscribe(signedIn => {
      if (signedIn) {
        this.router.navigate(['/dashboard']);
        this.notify.success('Login successful.');
      } else {
        this.notify.error('Could not sign in.');
      }
    });
  }

}
