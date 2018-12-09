import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardBottomSheetComponent } from './add-card-bottom-sheet.component';

describe('AddCardBottomSheetComponent', () => {
  let component: AddCardBottomSheetComponent;
  let fixture: ComponentFixture<AddCardBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCardBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
