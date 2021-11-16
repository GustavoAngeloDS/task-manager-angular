import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirColunaComponent } from './modal-excluir-coluna.component';

describe('ModalExcluirColunaComponent', () => {
  let component: ModalExcluirColunaComponent;
  let fixture: ComponentFixture<ModalExcluirColunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExcluirColunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExcluirColunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
