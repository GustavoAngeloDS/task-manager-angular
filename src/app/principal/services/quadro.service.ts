import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quadro } from 'src/app/shared/models/quadro.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuadroService {
  private apiUrl: string = `${environment.apiUrl}/quadros`;

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Quadro[]> {
    return this.httpClient.get<Quadro[]>(this.apiUrl);
  }

  save(Quadro: Quadro): Observable<Quadro> {
    return this.httpClient.post<Quadro>(this.apiUrl, Quadro);
  }

  update(Quadro: Quadro): Observable<Quadro> {
    return this.httpClient.put<Quadro>(this.apiUrl, Quadro);
  }

  delete(Quadro: Quadro): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl, {
      body: {
        id: Quadro.id,
        nome: Quadro.nome,
        usuario: Quadro.usuario
      }
    });
  }

  findById(id: number): Observable<Quadro> {
    return this.httpClient.get<Quadro>(`${this.apiUrl}/${id}`);
  }  
}
