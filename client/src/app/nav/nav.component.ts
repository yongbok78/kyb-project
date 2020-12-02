import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { StoreService } from '../common/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  title = '';
  children = [{ title: '', path: '/' }];

  constructor(
    private breakpointObserver: BreakpointObserver,
    public store: StoreService
  ) {}

  ngOnInit() {}

  changeDark(e: MatSlideToggleChange) {
    this.store.isDark = e.checked;
  }
}
