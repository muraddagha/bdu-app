import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartActionsComponent } from './chart-actions.component';

describe('ChartActionsComponent', () => {
  let component: ChartActionsComponent;
  let fixture: ComponentFixture<ChartActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
