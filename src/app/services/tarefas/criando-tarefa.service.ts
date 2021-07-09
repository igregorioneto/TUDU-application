import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from 'src/app/interfaces/tarefas/tarefa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriandoTarefaService {

  baseURL = environment.api
  token = localStorage.getItem('token')
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  }

  criarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.baseURL}/tarefa`, tarefa)
  }

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.baseURL}/tarefa?membro_id=${this.token}&concluido=false`)
  }
  
  getTarefaConcluidas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.baseURL}/tarefa?membro_id=${this.token}&concluido=true`)
  }

  pesquisaTarefaPorData(data: string): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.baseURL}/tarefa?membro_id=${this.token}&prazo=${data}`)
  }

  getTarefaPorId(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.baseURL}/tarefa/${id}`)
  }

  mudarParaConcluidoTarefa(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.put<Tarefa>(`${this.baseURL}/tarefa/${tarefa.id}`,tarefa)
  }
}

