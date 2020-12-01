import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApolloExamRoutingModule } from './apollo-exam-routing.module';
import { UserUpsertComponent } from './user/user-upsert/user-upsert.component';
import { UserComponent } from './user/user/user.component';
import { UsersComponent } from './user/users/users.component';

@NgModule({
  declarations: [UsersComponent, UserComponent, UserUpsertComponent],
  imports: [CommonModule, ApolloExamRoutingModule],
})
export class ApolloExamModule {}
