import {Usuario} from "./Usuario";
import {Servicio} from "./Servicio";

export interface Deuda {
      montoDeuda: string,
      usuario: Usuario,
      servicio: Servicio,
      status?: boolean,
      idSaldo?: number
}
