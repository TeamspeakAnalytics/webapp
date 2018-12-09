import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

export interface CardMenuItem {
  icon?: string;
  text: string;
  method: () => void;
}

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})
export class BaseCardComponent implements OnInit {

  @Input() cardMenuItems: CardMenuItem[];
  @Input() title = '';
  @Input() loading: boolean;

  maxWidth = '500px';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.isHandset$.subscribe(() => this.maxWidth = '100%');
    this.isWeb$.subscribe(() => this.maxWidth = '500px');
  }

}
