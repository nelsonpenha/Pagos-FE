import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPagoUsuarioComponent } from './listar-pago-usuario.component';

describe('ListarPagoUsuarioComponent', () => {
  let component: ListarPagoUsuarioComponent;
  let fixture: ComponentFixture<ListarPagoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPagoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPagoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
