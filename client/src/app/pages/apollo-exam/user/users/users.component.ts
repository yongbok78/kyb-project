import { DataSource } from '@angular/cdk/table';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
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
  dataSource = USER_DATA;
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            user(id: 1) {
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
      .valueChanges.subscribe((result) => {
        console.log(result.data);
      });
  }

  ngOnDestroy(): void {}

  add() {
    alert('add');
  }
  save(user: User) {
    alert(JSON.stringify(user));
  }
}
