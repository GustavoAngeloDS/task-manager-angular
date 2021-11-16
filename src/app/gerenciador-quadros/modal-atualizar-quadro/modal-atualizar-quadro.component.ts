import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Quadro } from 'src/app/shared/models/quadro.model';
import { ErrorToastrService } from 'src/app/shared/services/error-toastr.service';
import { GerenciadorQuadrosService } from '../services/gerenciador-quadros.service';

@Component({
  selector: 'app-modal-atualizar-quadro',
  templateUrl: './modal-atualizar-quadro.component.html',
  styleUrls: ['./modal-atualizar-quadro.component.css']
})
export class ModalAtualizarQuadroComponent implements OnInit {

  @ViewChild('formEditarQuadro') formEditarQuadro! : NgForm;
  @Input() quadro!: Quadro;

  quadroAtualizado! : Quadro;

  constructor(public activeModal: NgbActiveModal, private gerenciadorQuadrosService : GerenciadorQuadrosService, private errorToastrService: ErrorToastrService) { }

  ngOnInit(): void {
    this.quadroAtualizado = this.quadro;
  }

  atualizarQuadro(): void {
    console.log(this.quadroAtualizado);
    this.gerenciadorQuadrosService.update(this.quadroAtualizado).subscribe(
      ()=>{},
      (error) => this.errorToastrService.exibirErro(error.error.message),
      ()=> this.activeModal.close()
    );
  }

}
