import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusQuadrosComponent } from './meus-quadros.component';

describe('MeusQuadrosComponent', () => {
  let component: MeusQuadrosComponent;
  let fixture: ComponentFixture<MeusQuadrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusQuadrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusQuadrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
