import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarPagoUsuarioComponent} from "./listar-pago-usuario/listar-pago-usuario.component";
import {PagoComponent} from "./pago/pago.component";
import {ListarPagoServicioComponent} from "./listar-pago-servicio/listar-pago-servicio.component";
import {RegistrarPagoComponent} from "./registrar-pago/registrar-pago.component";

const routes: Routes = [
  {
    path: '',
    component: PagoComponent,
    children: [
      {
        path: 'listar-pago-usuario',
        component: ListarPagoUsuarioComponent
      },
      {
        path: 'listar-pago-servicio',
        component: ListarPagoServicioComponent
      },
      {
        path: 'registrar-pago',
        component: RegistrarPagoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoRoutingModule { }
