import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCriadoComponent } from './email-criado.component';

describe('EmailCriadoComponent', () => {
  let component: EmailCriadoComponent;
  let fixture: ComponentFixture<EmailCriadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailCriadoComponent]
    });
    fixture = TestBed.createComponent(EmailCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
