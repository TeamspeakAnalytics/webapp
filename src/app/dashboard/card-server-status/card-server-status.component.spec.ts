import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServerStatusComponent } from './card-server-status.component';

describe('CardServerStatusComponent', () => {
  let component: CardServerStatusComponent;
  let fixture: ComponentFixture<CardServerStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardServerStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
