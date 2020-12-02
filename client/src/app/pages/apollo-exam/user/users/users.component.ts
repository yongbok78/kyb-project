import { DataSource } from '@angular/cdk/table';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/common/models';

const USER_DATA: User[] = [
  {
    id: 1,
    email: 'test@test.com',
    name: 'test',
    posts: [{ id: 1, title: 'post', content: 'post content' }],
  },
  {
    id: 2,
    email: 'test@test.com',
    name: 'test',
    posts: [{ id: 2, title: 'post', content: 'post content' }],
  },
  {
    id: 3,
    email: 'test@test.com',
    name: 'test',
    posts: [{ id: 3, title: 'post', content: 'post content' }],
  },
  {
    id: 4,
    email: 'test@test.com',
    name: 'test',
    posts: [{ id: 4, title: 'post', content: 'post content' }],
  },
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'email', 'posts'];
  dataSource: User[] = [];
  subscription?: Subscription;
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.subscription = this.apollo
      .watchQuery({
        query: gql`
          query test {
            users {
              id
              email
              name
              posts {
                id
                title
                content
                published
              }
            }
          }
        `,
      })
      .valueChanges.pipe(map((result) => result.data as any))
      .subscribe((data) => {
        this.dataSource = data.users;
      });
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
