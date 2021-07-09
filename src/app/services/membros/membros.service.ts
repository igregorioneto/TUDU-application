import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membros } from 'src/app/interfaces/membros/membros';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembrosService {

  baseURL = environment.api
  constructor(private http: HttpClient) { }

  createMembro(membro: Membros): Observable<Membros> {
    return this.http.post<Membros>(`${this.baseURL}/membro`, membro)
  }

  loginMembro(email: string, senha: string): Observable<Membros | any> {
    return this.http.get<Membros | any>(`${this.baseURL}/membro?email=${email}&&senha=${senha}`)
  }

  listaDeMembros(): Observable<Membros[]> {
    return this.http.get<Membros[]>(`${this.baseURL}/membro`)
  }
}
