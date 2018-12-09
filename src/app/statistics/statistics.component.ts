import {Component, OnInit} from '@angular/core';
import {CardMenuItem} from './base-card/base-card.component';
import {MatBottomSheet} from '@angular/material';
import {AddCardBottomSheetComponent} from './add-card-bottom-sheet/add-card-bottom-sheet.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  cardMenuItems: CardMenuItem[] = [
    {text: 'Remove', method: this.example, icon: 'delete'},
    {text: 'Edit', method: this.example, icon: 'edit'}
  ];

  constructor(private bottomSheet: MatBottomSheet) {
  }

  ngOnInit() {
  }

  example(): void {
    console.log(1);
  }

  addCard(): void {
    this.bottomSheet.open(AddCardBottomSheetComponent);
  }

}
