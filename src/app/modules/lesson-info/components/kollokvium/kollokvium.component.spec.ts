import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KollokviumComponent } from './kollokvium.component';

describe('KollokviumComponent', () => {
  let component: KollokviumComponent;
  let fixture: ComponentFixture<KollokviumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KollokviumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KollokviumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
