import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url = environment.apiUrl
  servicioUrl = this.url + '/servicio/';

  constructor(private http: HttpClient) {}

  obtenerServicios(): Observable<any> {
    return this.http.get(this.servicioUrl)
  }
}
