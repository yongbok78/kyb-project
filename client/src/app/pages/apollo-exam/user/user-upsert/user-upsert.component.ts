import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreateUserGQL, UpdateUserGQL } from '../user.gql';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.scss'],
})
export class UserUpsertComponent implements OnInit, OnDestroy {
  emptyPost = {
    title: ['', Validators.required],
    content: [''],
    published: [false],
  };

  user = this.fb.group({
    name: [null],
    email: [null, Validators.compose([Validators.required, Validators.email])],
    posts: this.fb.array([this.fb.group(this.emptyPost)]),
  });

  get posts() {
    return this.user.get('posts') as FormArray;
  }

  addPost() {
    this.posts.push(this.fb.group(this.emptyPost));
  }

  getPost(i: number): FormGroup {
    return this.posts.at(i) as FormGroup;
  }

  deletePost(i: number) {
    this.posts.removeAt(i);
  }

  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private createUser: CreateUserGQL,
    private updateUser: UpdateUserGQL
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(this.user.valueChanges.subscribe());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  goList() {
    this.router.navigate(['../list'], { relativeTo: this.route });
  }

  save() {
    this.createUser
      .mutate({
        user: this.user.value,
      })
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['../', result.data?.createUser?.id], {
            relativeTo: this.route,
          });
        },
        (err) => {
          console.log(err);
          alert('사용자 정보 등록 중 문제가 발생하였습니다.');
        }
      );
  }
}
