import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { Menu, MENUS } from '../common/menu.model';
import { StoreService } from '../common/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  title: Subject<string | undefined>;
  children: Subject<Menu[] | undefined>;
  menus: Menu[];
  menu: Menu;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public store: StoreService
  ) {
    this.menus = MENUS;
    this.menu = MENUS[0];
    this.title = new Subject<string | undefined>();
    this.children = new Subject<Menu[] | undefined>();
    this.title.next(this.menu.title);
    this.children.next(this.menu.children);
    this.router.events
      .pipe(
        filter((ev) => ev instanceof NavigationEnd),
        map((ev) => ev as NavigationEnd)
      )
      .subscribe(this.selectMenu);
  }

  selectMenu(ne: NavigationEnd) {
    let path = ne.urlAfterRedirects;
    if (path === '' || path === '/') return;

    let subfixPath = '/' + path.split('/')[1],
      tmp = MENUS.filter((m) => m.path === subfixPath)[0];
    console.log(this.menu, tmp);
    if (this.menu !== tmp) {
      console.log(path);
      this.menu = tmp || MENUS[0];
      this.title.next(this.menu.title);
      this.children.next(this.menu.children);
      console.log(this);
    }
  }

  changeDark(e: MatSlideToggleChange) {
    this.store.isDark = e.checked;
  }
}
