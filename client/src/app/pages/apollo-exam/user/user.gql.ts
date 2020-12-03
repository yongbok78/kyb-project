import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

export interface User {
  id?: string;
  name?: string;
  email?: number;
  posts?: {
    id?: string;
    title?: string;
    content?: string;
    published?: string;
  };
}
export interface UsersResponse {
  users?: User[];
}

@Injectable({
  providedIn: 'root',
})
export class ListUserGQL extends Query<UsersResponse> {
  document = gql`
    query listUser($where: UserWhereInput) {
      users(UserWhereInput: $where) {
        id
        name
        email
        posts {
          id
          title
          content
          published
        }
      }
    }
  `;
}
