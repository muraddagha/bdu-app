import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonActivitiesComponent } from './lesson-activities.component';

describe('LessonActivitiesComponent', () => {
  let component: LessonActivitiesComponent;
  let fixture: ComponentFixture<LessonActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
