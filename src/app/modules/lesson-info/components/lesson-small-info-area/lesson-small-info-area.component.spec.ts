import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSmallInfoAreaComponent } from './lesson-small-info-area.component';

describe('LessonSmallInfoAreaComponent', () => {
  let component: LessonSmallInfoAreaComponent;
  let fixture: ComponentFixture<LessonSmallInfoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonSmallInfoAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSmallInfoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
