import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonAppealCardComponent } from './lesson-appeal-card.component';

describe('LessonAppealCardComponent', () => {
  let component: LessonAppealCardComponent;
  let fixture: ComponentFixture<LessonAppealCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonAppealCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonAppealCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
