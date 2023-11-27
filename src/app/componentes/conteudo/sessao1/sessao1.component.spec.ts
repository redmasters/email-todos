import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sessao1Component } from './sessao1.component';

describe('Sessao1Component', () => {
  let component: Sessao1Component;
  let fixture: ComponentFixture<Sessao1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sessao1Component]
    });
    fixture = TestBed.createComponent(Sessao1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
