import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FindUserGQL, User } from '../user.gql';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User = {
    name: '',
    email: '',
    posts: [{ title: '', content: '', published: false }],
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userGQL: FindUserGQL
  ) {}

  ngOnInit(): void {
    this.userGQL
      .fetch({ id: parseInt(this.route.snapshot.paramMap.get('id') || '0') })
      .subscribe((result) => (this.user = result.data.user || this.user));
  }

  goList() {
    this.router.navigate(['../list'], { relativeTo: this.route });
  }

  goSave() {
    alert('save');
  }
}
