import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coluna } from 'src/app/shared/models/coluna.model';
import { Quadro } from 'src/app/shared/models/quadro.model';
import { Tarefa } from 'src/app/shared/models/tarefa.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkAreaService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }
  
  findQuadroById(id: number): Observable<Quadro> {
    return this.httpClient.get<Quadro>(`${this.apiUrl}/quadros/${id}`);
  }  

  findColunasByQuadro(id: number): Observable<Coluna[]> {
    return this.httpClient.get<Coluna[]>(`${this.apiUrl}/colunas/find-by-quadro/${id}`);
  }

  findTarefasByQuadro(id: number): Observable<Tarefa[]>{
    return this.httpClient.get<Tarefa[]>(`${this.apiUrl}/tarefas/find-by-quadro/${id}`);
  }

  findTarefasByColuna(id: number): Observable<Tarefa[]>{
    return this.httpClient.get<Tarefa[]>(`${this.apiUrl}/tarefas/find-by-coluna/${id}`);
  }

  updateTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.httpClient.put<Tarefa>(`${this.apiUrl}/tarefas`, tarefa);
  }
}
