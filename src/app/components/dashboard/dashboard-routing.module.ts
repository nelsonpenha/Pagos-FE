import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {InicioComponent} from "./inicio/inicio.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: '', component: NavbarComponent, children: [
      { path: '', component: InicioComponent},
      {
        path: 'pago',
        loadChildren: () =>
          import('./pago/pago.module').then( (m) => m.PagoModule )
      },
      {
        path: 'pago',
        loadChildren: () =>
          import('./pago/pago.module').then( (m) => m.PagoModule )
      }
    ]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
