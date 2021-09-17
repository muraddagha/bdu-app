import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentAppealComponent } from './document-appeal.component';

describe('DocumentAppealComponent', () => {
  let component: DocumentAppealComponent;
  let fixture: ComponentFixture<DocumentAppealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentAppealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
