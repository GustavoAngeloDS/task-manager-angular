import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAtualizarQuadroComponent } from './modal-atualizar-quadro.component';

describe('ModalAtualizarQuadroComponent', () => {
  let component: ModalAtualizarQuadroComponent;
  let fixture: ComponentFixture<ModalAtualizarQuadroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAtualizarQuadroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAtualizarQuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
