import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpsertComponent } from './user-upsert.component';

describe('UserUpsertComponent', () => {
  let component: UserUpsertComponent;
  let fixture: ComponentFixture<UserUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
