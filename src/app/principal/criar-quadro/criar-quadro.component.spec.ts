import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarQuadroComponent } from './criar-quadro.component';

describe('CriarQuadroComponent', () => {
  let component: CriarQuadroComponent;
  let fixture: ComponentFixture<CriarQuadroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarQuadroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarQuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
