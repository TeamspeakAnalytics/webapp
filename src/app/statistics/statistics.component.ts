import {Component, OnInit} from '@angular/core';
import {CardMenuItem} from './base-card/base-card.component';
import {MatBottomSheet, MatDialog} from '@angular/material';
import {AddCardBottomSheetComponent, AddCardBottomSheetResults} from './add-card-bottom-sheet/add-card-bottom-sheet.component';
import {AddServerGroupStatsComponent} from './add-server-group-stats/add-server-group-stats.component';

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

  constructor(private bottomSheet: MatBottomSheet, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  example(): void {
    console.log(1);
  }

  addCard(): void {
    const bottomSheetRef = this.bottomSheet.open(AddCardBottomSheetComponent);
    bottomSheetRef.afterDismissed().subscribe((result: AddCardBottomSheetResults) => {
      if (result === AddCardBottomSheetResults.ServerGroupStats) {
        this.dialog.open(AddServerGroupStatsComponent);
      }
    });
  }

}
