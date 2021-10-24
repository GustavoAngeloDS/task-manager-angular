import { Usuario } from "./usuario.model";

export class Quadro {
  constructor(
    public id?: number,
    public nome?: string,
    public usuario?: Usuario
  ){ }
}
