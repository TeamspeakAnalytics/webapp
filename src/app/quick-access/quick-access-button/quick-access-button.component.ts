import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quick-access-button',
  templateUrl: './quick-access-button.component.html',
  styleUrls: ['./quick-access-button.component.scss']
})
export class QuickAccessButtonComponent implements OnInit {

  @Input() fontIcon = 'dashboard';

  constructor() { }

  ngOnInit() {
  }

}
