import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarColunaComponent } from './modal-criar-coluna.component';

describe('ModalCriarColunaComponent', () => {
  let component: ModalCriarColunaComponent;
  let fixture: ComponentFixture<ModalCriarColunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCriarColunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCriarColunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
