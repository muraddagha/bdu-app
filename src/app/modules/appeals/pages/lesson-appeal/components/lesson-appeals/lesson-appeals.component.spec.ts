import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonAppealsComponent } from './lesson-appeals.component';

describe('LessonAppealsComponent', () => {
  let component: LessonAppealsComponent;
  let fixture: ComponentFixture<LessonAppealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonAppealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonAppealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
