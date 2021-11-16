import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Coluna } from 'src/app/shared/models/coluna.model';
import { Quadro } from 'src/app/shared/models/quadro.model';
import { Tarefa } from 'src/app/shared/models/tarefa.model';
import { ErrorToastrService } from 'src/app/shared/services/error-toastr.service';
import { ModalCriarColunaComponent } from '../modal-criar-coluna/modal-criar-coluna.component';
import { WorkAreaService } from '../services/work-area.service';

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css']
})
export class QuadroComponent implements OnInit {

  quadro!: Quadro;
  colunas!: Coluna[];
  tarefas!: Tarefa[];

  tarefaSelecionada : Tarefa = new Tarefa();

  isCarregando : boolean = true;

  constructor(private route: ActivatedRoute, private workAreaService: WorkAreaService, private toastr: ToastrService, private modalService: NgbModal, private errorToastrService: ErrorToastrService ) { }

  ngOnInit(): void {
    let id =+this.route.snapshot.params['id'];
    this.buscarQuadro(id);
  }

  buscarQuadro(id: number): void{
    this.workAreaService.findQuadroById(id).subscribe(
      (quadro)=> {
        this.quadro = quadro;
      },
      (error) => this.errorToastrService.exibirErro(error.error.message),
      () => this.buscarColunas(id)
    );
  }

  buscarColunas(id: number): void {
    this.workAreaService.findColunasByQuadro(id).subscribe(
      (colunas: Coluna[]) => {
        this.colunas = colunas;
      },
      (error)=> {
        if(error != null)
          alert(error);
      },
      () => this.buscarTodasAsTarefas(id)
    );
  }

  buscarTodasAsTarefas(idQuadro : number): void {
    this.workAreaService.findTarefasByQuadro(idQuadro).subscribe(
      (tarefas: Tarefa[]) => {
        this.tarefas = tarefas;
      },
      (error) => {
        if(error != null)
          alert(error);
      },
      ()=> this.isCarregando = false
    )
  }

  onItemDrop(e: any) {
    const nomeColunaDestino : string = e.nativeEvent.target.lastChild.data;
    const novaColuna = this.buscaColunaDestinoDaTarefa(nomeColunaDestino);

    if(novaColuna.id != undefined)
      this.atualizaColunaDaTarefa(this.tarefaSelecionada, novaColuna);
    else
      this.exibirAvisoDropTarefaIncorreto();
  }

  exibirAvisoDropTarefaIncorreto(): void {
    this.toastr.warning('O card deve ser posicionado no título da coluna onde deseja transferi-lo', 'Aviso', {
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      progressBar: true
    })
  }

  buscaColunaDestinoDaTarefa(nomeColunaDestino: string): Coluna {
    let novaColuna : Coluna = new Coluna();

    this.colunas.forEach((coluna) => {
      if(coluna.nome == nomeColunaDestino)
        novaColuna = coluna;
    })

    return novaColuna;
  }

  atualizaColunaDaTarefa(tarefa: Tarefa, novaColuna: Coluna): void {
    this.tarefas.forEach((tarefaToUpdate) => {
      if(tarefaToUpdate == tarefa){
        tarefaToUpdate.coluna = novaColuna;
        this.atualizarTarefaApi(tarefaToUpdate);
      }
    });
  }

  atualizarTarefaApi(tarefa: Tarefa): void {
    this.workAreaService.updateTarefa(tarefa).subscribe(
      () => [],
      (error) => {
        if(error != null)
          alert(error)
      },
      ()=> this.tarefaSelecionada = new Tarefa()
    )
  }

  retornaTarefasPorColuna(idColuna: number): Tarefa[]{
    return this.tarefas.filter((tarefa) => tarefa.coluna?.id == idColuna);
  }

  setaTarefaSelecionada(tarefa: Tarefa){
    this.tarefaSelecionada = tarefa;
  }

  abrirModalNovaColuna(){
    const modalRef = this.modalService.open(ModalCriarColunaComponent);
    modalRef.componentInstance.quadro = this.quadro;
  }
}
