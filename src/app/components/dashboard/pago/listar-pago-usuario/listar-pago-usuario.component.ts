import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PagoService} from "../../../../services/pago/pago.service";
import {NotificacionService} from "../../../../services/notificacion/notificacion.service";
import {merge, of} from "rxjs";
import {catchError, map, startWith, switchMap} from "rxjs/operators";
import {Pago} from "../../../../interfaces/Pago";

@Component({
  selector: 'app-listar-pago-usuario',
  templateUrl: './listar-pago-usuario.component.html',
  styleUrls: ['./listar-pago-usuario.component.css']
})
export class ListarPagoUsuarioComponent implements AfterViewInit {

  displayedColumns: string[] = ['numeroReferenciaComprobante', 'servicio','usuario', 'montoAbonado', 'fechaRegistro', 'acciones'];
  listPago!: any[];
  form: FormGroup;

  itemsPerPage = 10;
  totalItems = 0;
  usuario = '';
  fechaInicio = '2000-01-01';
  fechaFin = '2030-01-01';

  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private pagoService: PagoService, private formBuilder: FormBuilder, private notificacionService: NotificacionService) {
    this.form= this.formBuilder.group({
      usuario: this.usuario,
      fechaInicio: [{ value: '2000-01-01', disabled: false }, Validators.required],
      fechaFin: [{ value: '2030-01-01', disabled: false }, Validators.required],
    })
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.pagoService.obtenerPagoPorUsuario(
          this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.usuario,
          this.fechaInicio, this.fechaFin);
      }),
      map((data: PagoList) => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.totalItems = data.total;

        return data.results;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        this.notificacionService.error('Ha ocurrido un error al obtener la lista de pagos');
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        return of([]);
      })
    ).subscribe(data => this.listPago = data);

  }

  private filterByParameter() {
    this.paginator.pageIndex = 0;
    this.isLoadingResults = true;
    return this.pagoService.obtenerPagoPorUsuario(
      this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.usuario,
      this.fechaInicio, this.fechaFin)
      .pipe(
        map(data => {
          this.isLoadingResults = false;
          this.totalItems = data.total;

          return data.results;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.notificacionService.error('Ha ocurrido un error al obtener la lista de pagos');
          return of([]);
        })
      )
      .subscribe(data => this.listPago = data);
  }

  onSubmit() {
    this.usuario= this.form.value.usuario;
    this.fechaInicio= this.form.value.fechaInicio;
    this.fechaFin= this.form.value.fechaFin;
    this.filterByParameter();
  }

}

export interface PagoList {
  results: Pago[];
  total: number;
}

