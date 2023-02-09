import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  url = environment.apiUrl
  pagoUrl = this.url + '/pago/';

  constructor(private http: HttpClient) { }

  obtenerPagoPorUsuario(pagina: number, tamanhoPagina: number, columna: any, direccion: any, idUsuario: any, fechaInicio: any, fechaFin: any ): Observable<any> {
    const url= `${this.pagoUrl}?pagina=${pagina}&tamanhoPagina=${tamanhoPagina}&ordenColumn=${columna}&direccion=${direccion}&idUsuario=${idUsuario}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;
    return this.http.get(url)
  }

  obtenerPagoPorServicio(pagina: number, tamanhoPagina: number, columna: any, direccion: any, idUsuario: any, idServicio: any, fechaInicio: any, fechaFin: any ): Observable<any> {
    const urlS= `${this.pagoUrl}/servicio/?pagina=${pagina}&tamanhoPagina=${tamanhoPagina}&ordenColumn=${columna}&direccion=${direccion}&idUsuario=${idUsuario}&idServicio=${idServicio}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;
    return this.http.get(urlS)
  }

  registrarPago(pago: any): Observable<any> {
    return this.http.post(this.pagoUrl, pago);
  }

}
