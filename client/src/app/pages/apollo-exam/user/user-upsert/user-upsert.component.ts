import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateUserGQL, FindUserGQL, Post, UpdateUserGQL } from '../user.gql';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.scss'],
})
export class UserUpsertComponent implements OnInit, OnDestroy {
  emptyPost = {
    id: [null],
    title: ['', Validators.required],
    content: [''],
    published: [false],
    delete: [false],
  };

  user = this.fb.group({
    id: [null],
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
    let post = this.getPost(i);
    if (post.value.id || post.value.title) {
      post.controls.delete.setValue(true);
    } else {
      this.posts.removeAt(i);
    }
  }

  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private createUser: CreateUserGQL,
    private updateUser: UpdateUserGQL,
    private userGQL: FindUserGQL
  ) {}

  ngOnInit(): void {
    let id: number | string | null = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      id = parseInt(id);
      this.userGQL
        .fetch({ id }, { fetchPolicy: 'no-cache' })
        .pipe(map((result) => result.data.user || this.user.value))
        .subscribe((u) => {
          if (u.posts && u.posts.length > 1) {
            for (let i = 1; i < u.posts.length; i++) {
              this.addPost();
            }
          }
          this.user.reset(u);
        });
    }

    this.subscriptions.push(this.user.valueChanges.subscribe(console.log));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  goList() {
    this.router.navigate(['../list'], { relativeTo: this.route });
  }

  goDetail(id: number) {
    this.router.navigate(['../', id], { relativeTo: this.route });
  }

  add() {
    let param = this.user.value;
    delete param.id;
    if (param.posts) {
      (param.posts as Post[]).forEach((p) => {
        delete p.id;
        if (p.delete === null) p.delete = false;
        if (p.published === null) p.published = false;
      });
    }
    this.createUser
      .mutate({
        user: param,
      })
      .subscribe(
        (result) => {
          this.router.navigate(['../', result.data?.createUser?.id], {
            relativeTo: this.route,
          });
        },
        (err) => {
          console.log(err);
          alert('사용자 정보 수정 중 문제가 발생하였습니다.');
        }
      );
  }

  update() {
    let param = this.user.value;
    if (param.posts) {
      (param.posts as Post[]).forEach((p) => {
        if (p.delete === null) p.delete = false;
        if (p.published === null) p.published = false;
      });
    }
    this.updateUser
      .mutate({
        user: this.user.value,
      })
      .subscribe(
        (result) => {
          this.router.navigate(['../', result.data?.updateUser?.id], {
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
