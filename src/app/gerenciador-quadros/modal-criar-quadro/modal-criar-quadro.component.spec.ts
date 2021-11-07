import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarQuadroComponent } from './modal-criar-quadro.component';

describe('ModalCriarQuadroComponent', () => {
  let component: ModalCriarQuadroComponent;
  let fixture: ComponentFixture<ModalCriarQuadroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCriarQuadroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCriarQuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
