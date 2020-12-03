import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    name: [''],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    posts: this.fb.array([]),
  });

  get posts() {
    return this.user.get('posts') as FormArray;
  }

  addPost() {
    this.posts.push(this.fb.group(this.emptyPost));
  }

  getPost(i: number): FormGroup {
    return this.posts.get([i]) as FormGroup;
  }

  deletePost(i: number) {
    this.posts.removeAt(i);
  }

  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
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
    if (this.user.valid) {
      console.log(this.user.value);
    } else {
      console.log('저장 불가');
    }
  }
}
