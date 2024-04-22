import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEmailComponent } from './criar-email.component';

describe('CriarEmailComponent', () => {
  let component: CriarEmailComponent;
  let fixture: ComponentFixture<CriarEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEmailComponent]
    });
    fixture = TestBed.createComponent(CriarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
