import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirQuadroComponent } from './modal-excluir-quadro.component';

describe('ModalExcluirQuadroComponent', () => {
  let component: ModalExcluirQuadroComponent;
  let fixture: ComponentFixture<ModalExcluirQuadroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExcluirQuadroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExcluirQuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
