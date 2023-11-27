import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessao3Component } from './sessao3.component';

describe('Sessao3Component', () => {
  let component: Sessao3Component;
  let fixture: ComponentFixture<Sessao3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sessao3Component]
    });
    fixture = TestBed.createComponent(Sessao3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
