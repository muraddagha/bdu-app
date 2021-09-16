import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonHeldComponent } from './lesson-held.component';

describe('LessonHeldComponent', () => {
  let component: LessonHeldComponent;
  let fixture: ComponentFixture<LessonHeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonHeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonHeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
