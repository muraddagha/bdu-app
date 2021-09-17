import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonInfoAreaComponent } from './lesson-info-area.component';

describe('LessonInfoAreaComponent', () => {
  let component: LessonInfoAreaComponent;
  let fixture: ComponentFixture<LessonInfoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonInfoAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonInfoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
