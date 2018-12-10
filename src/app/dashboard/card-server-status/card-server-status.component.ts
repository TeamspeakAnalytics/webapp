import {Component, OnInit} from '@angular/core';
import {GetServerListInfo} from '../../models/getServerListInfo';
import {ServerService} from '../../services/server.service';

@Component({
  selector: 'app-card-server-status',
  templateUrl: './card-server-status.component.html',
  styleUrls: ['./card-server-status.component.scss']
})
export class CardServerStatusComponent implements OnInit {

  serverInfo: GetServerListInfo;
  displayedColumns: string[] = ['key', 'value'];
  dataSource: { key: string, value: any }[] = [];
  serverAttributesToDisplay: { key: string, value: any }[] = [
    {key: 'status', value: 'Status'},
    {key: 'queriesOnline', value: 'Queries'},
    {key: 'maxClients', value: 'Maximum Clients'},
    {key: 'uptime', value: 'Up-Time'},
    {key: 'port', value: 'Address'},
    {key: 'clientsOnline', value: 'Clients'}
  ];

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
    this.serverService.getServerInfo().subscribe(info => {
      if (!info) {
        return;
      }
      this.serverInfo = info;
      const keys = Object.keys(info);
      keys.forEach(key => {
        const display = this.serverAttributesToDisplay.find(x => x.key === key);
        if (display) {
          this.dataSource.push({
            key: display.value,
            value: info[key]
          });
        }
      });
    });
  }

}
