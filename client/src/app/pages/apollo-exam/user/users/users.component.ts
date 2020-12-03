import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  subscriptions: Subscription[] = [];
  constructor(
    private list: ListUserGQL,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.list
        .watch()
        .valueChanges.subscribe(
          (result) => (this.dataSource = result.data.users || [])
        )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  add() {
    this.router.navigate(['../save'], { relativeTo: this.route });
  }
  save(user: User) {
    alert(JSON.stringify(user));
  }
}
