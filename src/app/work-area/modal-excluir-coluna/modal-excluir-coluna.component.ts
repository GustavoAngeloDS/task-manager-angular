import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Coluna } from 'src/app/shared/models/coluna.model';
import { ErrorToastrService } from 'src/app/shared/services/error-toastr.service';
import { WorkAreaService } from '../services/work-area.service';

@Component({
  selector: 'app-modal-excluir-coluna',
  templateUrl: './modal-excluir-coluna.component.html',
  styleUrls: ['./modal-excluir-coluna.component.css']
})
export class ModalExcluirColunaComponent implements OnInit {
  @Input() coluna!: Coluna;

  constructor(private workAreaService: WorkAreaService, private errorToastrService: ErrorToastrService,  private router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  excluirColuna(): void {
    this.workAreaService.excluirColuna(this.coluna).subscribe(
      () => [],
      (error) => this.errorToastrService.exibirErro(error.data.message),
      () => this.fecharModalERecarregarPagina()
    )
  }

  fecharModalERecarregarPagina(): void {
    this.activeModal.close();
    this.redirectTo("work-area/quadro/"+this.coluna.quadro?.id);
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

}
