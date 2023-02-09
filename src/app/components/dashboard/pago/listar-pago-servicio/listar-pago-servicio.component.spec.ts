import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPagoServicioComponent } from './listar-pago-servicio.component';

describe('ListarPagoServicioComponent', () => {
  let component: ListarPagoServicioComponent;
  let fixture: ComponentFixture<ListarPagoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPagoServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPagoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
