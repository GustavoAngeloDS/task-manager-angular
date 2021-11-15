import { Quadro } from "./quadro.model";
import { Tarefa } from "./tarefa.model";

export class Coluna {
  constructor(
    public id?: number,
    public nome?: string,
    public quadro?: Quadro,
    public tarefas?: Tarefa[]
  ){}
}
