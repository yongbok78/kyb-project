import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
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
        .watch(undefined, { fetchPolicy: 'no-cache' })
        .valueChanges.pipe(tap(console.log))
        .subscribe((result) => (this.dataSource = result.data.users || []))
    );
    // TODO: router에서 넘어온 페이징처리 위한 값 확인
    console.log(this.route.snapshot.paramMap.get('no'));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  add() {
    this.router.navigate(['../../save'], { relativeTo: this.route });
  }
  detail(id: number) {
    this.router.navigate(['../../', id], { relativeTo: this.route });
  }
}
