import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  password1: string;
  mail: string;
  mail1: string;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  register(): void {

    if (this.password !== this.password1) {
      this.snackBar.open('Your passwords don\'t match!', null, {duration: 3000});
      this.password = '';
      this.password1 = '';
      return;
    }

    if (this.mail !== this.mail1) {
      this.snackBar.open('Your mails don\'t match!', null, {duration: 3000});
      this.mail = '';
      this.mail1 = '';
      return;
    }

    if (this.password.length < 4) {
      this.snackBar.open('Please choose a password with at least 4 characters!', null, {duration: 3000});
      this.password = '';
      this.password1 = '';
      return;
    }

    this.snackBar.open('User: ' + this.username + ' Pass: ' + this.password + ' Mail: ' + this.mail, null, {
      duration: 3000
    });
  }
}
