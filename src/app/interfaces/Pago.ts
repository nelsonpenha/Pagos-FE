import {Usuario} from "./Usuario";
import {Servicio} from "./Servicio";

export interface Pago {
      numeroReferenciaComprobante: string,
      montoAbonado: string,
      usuario: Usuario,
      servicio: Servicio,
      status?: boolean,
      fechaRegistro?: Date,
      montoDeudaTotal?: string,
      idPago?: number
}
