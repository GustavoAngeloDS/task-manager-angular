import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuadroService {
  private apiUrl: string = `${environment.apiUrl}/quadros`;

  constructor(private httpClient: HttpClient) { }
}
