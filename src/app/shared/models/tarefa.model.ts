import { Coluna } from "./coluna.model";
import { Quadro } from "./quadro.model";
import { Usuario } from "./usuario.model";

export class Tarefa {
  constructor(
    public id?: number,
    public descricao?: string,
    public finalizado?: boolean,
    public dataFinalizacao?: string,
    public usuario?: Usuario,
    public coluna?: Coluna,
    public quadro?: Quadro
  ){}
}
