import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  stay = true;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  login(): void {
    this.snackBar.open('User: ' + this.username + ' Pass: ' + this.password + ' Stay: ' + this.stay, null, {
      duration: 2000
    });
  }

}
