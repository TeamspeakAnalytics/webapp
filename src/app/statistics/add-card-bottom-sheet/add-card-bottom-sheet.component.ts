import {Component, OnInit} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';

export enum AddCardBottomSheetResults {
  ServerGroupStats,
  ServerStats
}

@Component({
  selector: 'app-add-card-bottom-sheet',
  templateUrl: './add-card-bottom-sheet.component.html',
  styleUrls: ['./add-card-bottom-sheet.component.scss']
})
export class AddCardBottomSheetComponent implements OnInit {

  results = AddCardBottomSheetResults;

  constructor(private bottomSheetRef: MatBottomSheetRef<AddCardBottomSheetComponent>) {
  }

  ngOnInit() {
  }

  close(result: AddCardBottomSheetResults): void {
    this.bottomSheetRef.dismiss(result);
  }

}
