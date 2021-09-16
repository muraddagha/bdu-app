import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPointComponent } from './lesson-point.component';

describe('LessonPointComponent', () => {
  let component: LessonPointComponent;
  let fixture: ComponentFixture<LessonPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
