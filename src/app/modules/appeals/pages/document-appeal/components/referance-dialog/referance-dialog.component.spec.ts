import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferanceDialogComponent } from './referance-dialog.component';

describe('ReferanceDialogComponent', () => {
  let component: ReferanceDialogComponent;
  let fixture: ComponentFixture<ReferanceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferanceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
