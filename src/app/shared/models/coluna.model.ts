import { Quadro } from "./quadro.model";

export class Coluna {
  constructor(
    public id?: number,
    public nome?: string,
    public quadro?: Quadro
  ){}
}
