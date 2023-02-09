import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Pago} from "../../../../interfaces/Pago";
import {Router} from "@angular/router";
import {NotificacionService} from "../../../../services/notificacion/notificacion.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PagoService} from "../../../../services/pago/pago.service";
import {Servicio} from "../../../../interfaces/Servicio";
import {ServicioService} from "../../../../services/servicio/servicio.service";
import {Usuario} from "../../../../interfaces/Usuario";

@Component({
  selector: 'app-registrar-pago',
  templateUrl: './registrar-pago.component.html',
  styleUrls: ['./registrar-pago.component.css']
})
export class RegistrarPagoComponent implements OnInit {

  servicios: Servicio[] = []
  form: FormGroup;
  col= 1
  row= 1

  onSubmit() {
    const usuarioParametro: Usuario = {
      idUsuario: this.form.value.usuario
    }
    const pago: Pago = {
      numeroReferenciaComprobante: this.form.value.numeroReferenciaComprobante,
      servicio: this.form.value.servicio,
      usuario: usuarioParametro,
      montoAbonado: this.form.value.montoAbonado
    }
    this.pagoService.registrarPago(pago).subscribe(
      data => {
        this.form.reset();
        this.notificacionService.exito("Se ha realizado el pago")
      },
      error => {
        this.notificacionService.error(error.error)
      }
    );
  }

  ngOnInit(): void {
    this.getServicios();
  }

  constructor( private pagoService: PagoService, private servicioService: ServicioService,
               private formBuilder: FormBuilder, private router: Router,
               private snackBar: MatSnackBar, private notificacionService: NotificacionService) {
    this.form= this.formBuilder.group({
      numeroReferenciaComprobante: [{ value: '', disabled: false }, Validators.required],
      usuario: [{ value: '', disabled: false }, Validators.required],
      servicio: [{ value: '', disabled: false }, Validators.required],
      montoAbonado: [{ value: '', disabled: false }, Validators.required]
    })
  }

  getServicios(): void {
    this.servicioService.obtenerServicios().subscribe(
      respServicio => {
        this.servicios = respServicio;
      }, error => {
        this.notificacionService.error('Ha ocurrido un error')
      }
    );
  }

}

