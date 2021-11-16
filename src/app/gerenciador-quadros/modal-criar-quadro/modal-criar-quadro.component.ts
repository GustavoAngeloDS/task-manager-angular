import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Quadro } from 'src/app/shared/models/quadro.model';
import { ErrorToastrService } from 'src/app/shared/services/error-toastr.service';
import { GerenciadorQuadrosService } from '../services/gerenciador-quadros.service';

@Component({
  selector: 'app-modal-criar-quadro',
  templateUrl: './modal-criar-quadro.component.html',
  styleUrls: ['./modal-criar-quadro.component.css']
})
export class ModalCriarQuadroComponent implements OnInit {

  quadro!: Quadro;

  constructor(public activeModal: NgbActiveModal, private gerenciadorQuadrosService : GerenciadorQuadrosService, private router: Router, private errorToastrService: ErrorToastrService) { }

  ngOnInit(): void {
    this.quadro = new Quadro();
  }

  incluirQuadro(): void {
    this.gerenciadorQuadrosService.save(this.quadro).subscribe(
      () =>{},
      (error) => this.errorToastrService.exibirErro(error.error.message),
      () => this.fecharModalAtualizarPagina());
  }

  fecharModalAtualizarPagina(): void {
    this.activeModal.dismiss();
    this.redirectTo("meus-quadros");
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }
}
