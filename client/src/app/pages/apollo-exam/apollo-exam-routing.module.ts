import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostUpsertComponent } from './post/post-upsert/post-upsert.component';
import { PostComponent } from './post/post/post.component';
import { PostsComponent } from './post/posts/posts.component';
import { UserUpsertComponent } from './user/user-upsert/user-upsert.component';
import { UserComponent } from './user/user/user.component';
import { UsersComponent } from './user/users/users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'user' },
      {
        path: 'user',
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'list' },
          { path: 'list', component: UsersComponent },
          { path: 'save/:id', component: UserUpsertComponent },
          { path: ':id', component: UserComponent },
        ],
      },
      {
        path: 'post',
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'list' },
          { path: 'list', component: PostsComponent },
          { path: 'save/:id', component: PostUpsertComponent },
          { path: ':id', component: PostComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApolloExamRoutingModule {}
