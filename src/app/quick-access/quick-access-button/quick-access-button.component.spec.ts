import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAccessButtonComponent } from './quick-access-button.component';

describe('QuickAccessButtonComponent', () => {
  let component: QuickAccessButtonComponent;
  let fixture: ComponentFixture<QuickAccessButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickAccessButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAccessButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
