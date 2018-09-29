import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.scss']
})
export class QuickAccessComponent implements OnInit {

  @Input() items: QuickAccessItem[];
  @Output() itemSelected: EventEmitter<QuickAccessItem> = new EventEmitter<QuickAccessItem>();
  selectedItem: QuickAccessItem;

  constructor() {
  }

  ngOnInit() {
  }
}

export interface QuickAccessItem {
  title: string;
  icon: string;
  routerLink: string;
}
