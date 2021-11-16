import { Component, OnInit } from '@angular/core';
import { Quadro } from 'src/app/shared/models/quadro.model';
import { GerenciadorQuadrosService } from '../services/gerenciador-quadros.service';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalExcluirQuadroComponent } from '../modal-excluir-quadro/modal-excluir-quadro.component';
import { ModalAtualizarQuadroComponent } from '../modal-atualizar-quadro/modal-atualizar-quadro.component';
import { ModalCriarQuadroComponent } from '../modal-criar-quadro/modal-criar-quadro.component';
import { ErrorToastrService } from 'src/app/shared/services/error-toastr.service';

@Component({
  selector: 'app-meus-quadros',
  templateUrl: './meus-quadros.component.html',
  styleUrls: ['./meus-quadros.component.css']
})
export class MeusQuadrosComponent implements OnInit {

  public quadros!: Quadro[];

  constructor(private gerenciadorQuadrosService: GerenciadorQuadrosService, private modalService: NgbModal, private errorToastrService: ErrorToastrService) { }

  ngOnInit(): void {
    this.buscarQuadrosAtivos();
  }

  buscarQuadrosAtivos(): void{
    this.gerenciadorQuadrosService.findAll().subscribe(
      (quadros: Quadro[]) => {
        this.quadros = quadros;
      },
      (error) => this.errorToastrService.exibirErro(error.error.message),
    )
  }

  abrirModalExcluirQuadro(quadro: Quadro){
    const modalRef = this.modalService.open(ModalExcluirQuadroComponent);
    modalRef.componentInstance.quadro = quadro;
  }

  abrirModalEditarQuadro(quadro: Quadro){
    const modalRef = this.modalService.open(ModalAtualizarQuadroComponent);
    modalRef.componentInstance.quadro = quadro;
  }

  abrirModalNovoQuadro(){
    this.modalService.open(ModalCriarQuadroComponent);
  }
}
