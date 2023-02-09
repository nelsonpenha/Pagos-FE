import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagoRoutingModule } from './pago-routing.module';
import { PagoComponent } from './pago/pago.component';
import {SharedModule} from "../../shared/shared.module";
import { ListarPagoUsuarioComponent } from './listar-pago-usuario/listar-pago-usuario.component';
import { ListarPagoServicioComponent } from './listar-pago-servicio/listar-pago-servicio.component';
import { RegistrarPagoComponent } from './registrar-pago/registrar-pago.component';


@NgModule({
  declarations: [
    PagoComponent,
    ListarPagoUsuarioComponent,
    ListarPagoServicioComponent,
    RegistrarPagoComponent
  ],
  imports: [
    CommonModule,
    PagoRoutingModule,
    SharedModule
  ]
})
export class PagoModule { }
