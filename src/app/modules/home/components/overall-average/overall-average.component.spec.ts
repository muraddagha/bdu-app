import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallAverageComponent } from './overall-average.component';

describe('OverallAverageComponent', () => {
  let component: OverallAverageComponent;
  let fixture: ComponentFixture<OverallAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallAverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
