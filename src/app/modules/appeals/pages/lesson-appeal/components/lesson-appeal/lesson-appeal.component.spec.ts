import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonAppealComponent } from './lesson-appeal.component';

describe('LessonAppealComponent', () => {
  let component: LessonAppealComponent;
  let fixture: ComponentFixture<LessonAppealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonAppealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
