import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraEstagioComponent } from './calculadora-estagio.component';

describe('CalculadoraEstagioComponent', () => {
  let component: CalculadoraEstagioComponent;
  let fixture: ComponentFixture<CalculadoraEstagioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraEstagioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraEstagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
