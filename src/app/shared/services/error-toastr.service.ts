import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorToastrService {

  constructor(private toastr: ToastrService) { }

  exibirErro(mensagemErro: string): void {
    this.toastr.error(mensagemErro, 'Erro', {
      timeOut: 15000,
      positionClass: 'toast-bottom-center',
      progressBar: true
    })
  }
}
