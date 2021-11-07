import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quadro } from 'src/app/shared/models/quadro.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorQuadrosService {
  private apiUrl: string = `${environment.apiUrl}/quadros`;

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Quadro[]> {
    return this.httpClient.get<Quadro[]>(this.apiUrl);
  }

  save(quadro: Quadro): Observable<Quadro> {
    quadro.usuario = new Usuario(1);; //Remover quando a implementação de usuário for concluida
    return this.httpClient.post<Quadro>(this.apiUrl, quadro);
  }

  update(quadro: Quadro): Observable<Quadro> {
    return this.httpClient.put<Quadro>(this.apiUrl, quadro);
  }

  delete(quadro: Quadro): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl, {
      body: {
        id: quadro.id,
        nome: quadro.nome,
        usuario: quadro.usuario
      }
    });
  }

  findById(id: number): Observable<Quadro> {
    return this.httpClient.get<Quadro>(`${this.apiUrl}/${id}`);
  }  
}
