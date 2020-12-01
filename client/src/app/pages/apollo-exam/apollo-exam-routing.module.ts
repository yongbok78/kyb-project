import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
          { path: 'list', component: UsersComponent },
          { path: 'save/:id', component: UserUpsertComponent },
          { path: ':id', component: UserComponent },
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
