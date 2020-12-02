import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { PostUpsertComponent } from '../post/post-upsert/post-upsert.component';
import { PostComponent } from '../post/post/post.component';
import { PostsComponent } from '../post/posts/posts.component';
import { ApolloExamRoutingModule } from './apollo-exam-routing.module';
import { UserUpsertComponent } from './user/user-upsert/user-upsert.component';
import { UserComponent } from './user/user/user.component';
import { UsersComponent } from './user/users/users.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GraphQLModule } from 'src/app/graphql.module';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserUpsertComponent,
    PostComponent,
    PostsComponent,
    PostUpsertComponent,
  ],
  imports: [
    CommonModule,
    ApolloExamRoutingModule,
    MatTableModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    GraphQLModule,
  ],
})
export class ApolloExamModule {}
