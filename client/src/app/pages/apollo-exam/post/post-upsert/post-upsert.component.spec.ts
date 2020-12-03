import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUpsertComponent } from './post-upsert.component';

describe('PostUpsertComponent', () => {
  let component: PostUpsertComponent;
  let fixture: ComponentFixture<PostUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
