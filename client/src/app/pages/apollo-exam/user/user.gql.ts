import { Injectable } from '@angular/core';
import { Mutation, Query } from 'apollo-angular';
import gql from 'graphql-tag';

export interface User {
  id?: number;
  name?: string;
  email?: string;
  posts?: Post[];
}
export interface UserResponse {
  users?: User[];
  user?: User;
  createUser?: User;
  updateUser?: User;
}

export interface Post {
  id?: number;
  title?: string;
  content?: string;
  published: false;
  delete?: false;
}

@Injectable({
  providedIn: 'root',
})
export class ListUserGQL extends Query<UserResponse> {
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

@Injectable({
  providedIn: 'root',
})
export class FindUserGQL extends Query<UserResponse> {
  document = gql`
    query FindUser($id: Int!) {
      user(id: $id) {
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

@Injectable({
  providedIn: 'root',
})
export class CreateUserGQL extends Mutation<UserResponse> {
  document = gql`
    mutation CreateUser($user: UserCreateInput!) {
      createUser(UserCreateInput: $user) {
        id
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class UpdateUserGQL extends Mutation<UserResponse> {
  document = gql`
    mutation UpdateUser($user: UserUpdateInput!) {
      updateUser(UserUpdateInput: $user) {
        id
      }
    }
  `;
}
