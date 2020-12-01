import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../common/menu.model';

@Component({
  selector: 'app-menu',
  template: `<mat-toolbar>{{ menu.title }}</mat-toolbar>
    <mat-nav-list>
      <a
        *ngFor="let m of menu.children"
        mat-list-item
        routerLink="{{ m.path }}"
        >{{ m.title }}</a
      >
    </mat-nav-list>`,
})
export class MenuComponent implements OnInit {
  @Input() menu: Menu;
  constructor() {
    this.menu = { title: 'menu', path: 'menu' };
  }

  ngOnInit(): void {}
}
