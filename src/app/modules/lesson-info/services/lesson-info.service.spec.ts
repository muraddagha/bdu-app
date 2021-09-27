import { TestBed } from '@angular/core/testing';

import { LessonInfoService } from './lesson-info.service';

describe('LessonInfoService', () => {
  let service: LessonInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
