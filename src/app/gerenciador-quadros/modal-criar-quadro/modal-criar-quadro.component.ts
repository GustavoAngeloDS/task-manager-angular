import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Quadro } from 'src/app/shared/models/quadro.model';
import { GerenciadorQuadrosService } from '../services/gerenciador-quadros.service';

@Component({
  selector: 'app-modal-criar-quadro',
  templateUrl: './modal-criar-quadro.component.html',
  styleUrls: ['./modal-criar-quadro.component.css']
})
export class ModalCriarQuadroComponent implements OnInit {

  quadro!: Quadro;

  constructor(public activeModal: NgbActiveModal, private gerenciadorQuadrosService : GerenciadorQuadrosService, private router: Router) { }

  ngOnInit(): void {
    this.quadro = new Quadro();
  }

  incluirQuadro(): void {
    this.gerenciadorQuadrosService.save(this.quadro).subscribe(
      ()=>{},
      (error)=> {
        if(error != null)
          alert(error);
      },
      ()=> this.fecharModalAtualizarPagina());
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
