import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListUserGQL, User } from '../user.gql';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'email', 'posts'];
  dataSource: User[] = [];
  subscription?: Subscription;
  constructor(private list: ListUserGQL) {}

  ngOnInit(): void {
    this.subscription = this.list
      .watch()
      .valueChanges.subscribe(
        (result) => (this.dataSource = result.data.users || [])
      );
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }

  add() {
    alert('add');
  }
  save(user: User) {
    alert(JSON.stringify(user));
  }
}
