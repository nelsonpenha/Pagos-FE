import {Usuario} from "./Usuario";

export interface Saldo {
      montoSaldo: string,
      usuario: Usuario,
      status?: boolean,
      idSaldo?: number
}
