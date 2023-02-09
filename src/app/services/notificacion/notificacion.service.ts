import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) {}

/*  default(message: string) {
    this.show(message, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  info(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'info-snackBar',
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }*/

  exito(message: string) {
    this.show(message,{
      duration: 4000,
      panelClass: 'exito-snackBar',
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  /*advertencia(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'warning-snackBar',
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }*/

  error(message: string) {
    this.show(message,{
      duration: 4000,
      panelClass: 'error-snackBar',
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  private show(message: string, configuration: MatSnackBarConfig) {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.open(message, undefined, configuration));
  }

}
