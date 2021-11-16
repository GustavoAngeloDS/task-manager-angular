import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coluna } from 'src/app/shared/models/coluna.model';
import { Quadro } from 'src/app/shared/models/quadro.model';
import { Tarefa } from 'src/app/shared/models/tarefa.model';
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

  constructor(private route: ActivatedRoute, private workAreaService: WorkAreaService) { }

  ngOnInit(): void {
    let id =+this.route.snapshot.params['id'];
    this.buscarQuadro(id);
  }

  buscarQuadro(id: number): void{
    this.workAreaService.findQuadroById(id).subscribe(
      (quadro)=> {
        this.quadro = quadro;
      },
      (error) => {
        if(error != null)
          alert(error);
      },
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
      }
    )
  }

  onItemDrop(e: any) {
    const nomeColunaDestino : string = e.nativeEvent.target.lastChild.data;
    const novaColuna = this.buscaColunaDestinoDaTarefa(nomeColunaDestino);

    this.atualizaColunaDaTarefa(e.dragData[0], novaColuna);
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
      }
    )
  }
}
