import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranskriptComponent } from './transkript.component';

describe('TranskriptComponent', () => {
  let component: TranskriptComponent;
  let fixture: ComponentFixture<TranskriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranskriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranskriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
