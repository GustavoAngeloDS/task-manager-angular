import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Quadro } from 'src/app/shared/models/quadro.model';
import { GerenciadorQuadrosService } from '../services/gerenciador-quadros.service';

@Component({
  selector: 'app-modal-excluir-quadro',
  templateUrl: './modal-excluir-quadro.component.html',
  styleUrls: ['./modal-excluir-quadro.component.css']
})
export class ModalExcluirQuadroComponent implements OnInit {

  @Input() quadro!: Quadro;

  constructor(public activeModal: NgbActiveModal, private gerenciadorQuadrosService : GerenciadorQuadrosService, private router: Router) { }

  ngOnInit(): void {
  }

  excluirQuadro() : void {
    this.gerenciadorQuadrosService.delete(this.quadro).subscribe(
      ()=>{},
      (error) => {
        if(error != null)
          alert(error);
      },
      () => this.fecharModalERecarregarPagina());
    }

  fecharModalERecarregarPagina(): void {
    this.activeModal.close();
    this.redirectTo("meus-quadros");
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }
}
