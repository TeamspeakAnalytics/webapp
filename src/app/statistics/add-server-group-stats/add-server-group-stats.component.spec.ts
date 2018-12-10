import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServerGroupStatsComponent } from './add-server-group-stats.component';

describe('AddServerGroupStatsComponent', () => {
  let component: AddServerGroupStatsComponent;
  let fixture: ComponentFixture<AddServerGroupStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServerGroupStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServerGroupStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
