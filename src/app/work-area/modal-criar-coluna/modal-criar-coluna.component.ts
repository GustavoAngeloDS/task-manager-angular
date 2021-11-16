import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Coluna } from 'src/app/shared/models/coluna.model';
import { Quadro } from 'src/app/shared/models/quadro.model';
import { WorkAreaService } from '../services/work-area.service';

@Component({
  selector: 'app-modal-criar-coluna',
  templateUrl: './modal-criar-coluna.component.html',
  styleUrls: ['./modal-criar-coluna.component.css']
})
export class ModalCriarColunaComponent implements OnInit {

  coluna!: Coluna;
  @Input() quadro!: Quadro;

  constructor(public activeModal: NgbActiveModal, private workAreaService: WorkAreaService, private router: Router) { }

  ngOnInit(): void {
    this.coluna = new Coluna();
    this.coluna.quadro = this.quadro;
  }

  incluirColuna(): void {
    this.workAreaService.salvarNovaColuna(this.coluna).subscribe(
      ()=>[],
      (error) => {
        if(error != null)
          alert(error)
      },
      ()=> this.fecharModalAtualizarPagina()
    )
  }

  fecharModalAtualizarPagina(): void {
    this.activeModal.dismiss();
    this.redirectTo(`work-area/quadro/`+this.quadro.id);
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }
}
