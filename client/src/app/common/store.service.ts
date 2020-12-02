import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Menu, MENUS } from './menu.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  isDark = false;

  private beforePath = '';
  menu = MENUS[0];

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((ev) => ev instanceof NavigationEnd),
        map((ev) => ev as NavigationEnd)
      )
      .subscribe((ne: NavigationEnd) => {
        let currPath = ne.urlAfterRedirects;
        if (currPath === '') currPath = '/';

        currPath = '/' + currPath.split('/')[1];
        if (this.beforePath !== currPath) {
          this.beforePath = currPath;
          this.menu = MENUS.filter((v: Menu) => v.path === currPath)[0];
        }
      });
  }

  get menus() {
    return MENUS;
  }
}
