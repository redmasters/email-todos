import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessao4Component } from './sessao4.component';

describe('Sessao4Component', () => {
  let component: Sessao4Component;
  let fixture: ComponentFixture<Sessao4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sessao4Component]
    });
    fixture = TestBed.createComponent(Sessao4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
