import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { StoreService } from '../common/store.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  menuTitle = 'Angular 화면 예제';

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public store: StoreService
  ) {}

  setMenuTitle(ev: MouseEvent) {
    this.menuTitle =
      (ev.target as HTMLElement | undefined)!.innerText || this.menuTitle;
  }

  changeDark(e: MatSlideToggleChange) {
    this.store.isDark = e.checked;
  }
}
