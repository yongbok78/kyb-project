import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { GraphQLModule } from 'src/app/graphql.module';
import { ApolloExamRoutingModule } from './apollo-exam-routing.module';
import { PostUpsertComponent } from './post/post-upsert/post-upsert.component';
import { PostComponent } from './post/post/post.component';
import { PostsComponent } from './post/posts/posts.component';
import { UserUpsertComponent } from './user/user-upsert/user-upsert.component';
import { UserComponent } from './user/user/user.component';
import { UsersComponent } from './user/users/users.component';

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
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ],
})
export class ApolloExamModule {}
