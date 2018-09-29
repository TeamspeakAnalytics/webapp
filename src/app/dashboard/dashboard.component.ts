import {Component, OnInit} from '@angular/core';
import {ServerService} from '../services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  serviceIsAvailable = true;

  constructor(private serverService: ServerService) {
    serverService.isAvailable.subscribe(isAvailable => this.serviceIsAvailable = isAvailable);
  }

  ngOnInit() {
  }

}
