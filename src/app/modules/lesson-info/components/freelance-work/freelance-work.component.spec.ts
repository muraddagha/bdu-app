import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceWorkComponent } from './freelance-work.component';

describe('FreelanceWorkComponent', () => {
  let component: FreelanceWorkComponent;
  let fixture: ComponentFixture<FreelanceWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
