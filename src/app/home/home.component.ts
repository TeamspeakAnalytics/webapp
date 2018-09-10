import {Component, OnInit} from '@angular/core';
import {ServerService} from '../services/server.service';
import {GetServerListInfo} from '../models/getServerListInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  serverInfo: GetServerListInfo;

  constructor(private serverService: ServerService) {
    serverService.getServerInfo().subscribe(info => this.serverInfo = info);
  }

  ngOnInit() {
  }

}
