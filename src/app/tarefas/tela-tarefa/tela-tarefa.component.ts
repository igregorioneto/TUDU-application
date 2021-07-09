import { Component, OnInit } from '@angular/core';
import { CriandoTarefaService } from 'src/app/services/tarefas/criando-tarefa.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Tarefa } from 'src/app/interfaces/tarefas/tarefa';

@Component({
  selector: 'app-tela-tarefa',
  templateUrl: './tela-tarefa.component.html',
  styleUrls: ['./tela-tarefa.component.sass']
})
export class TelaTarefaComponent implements OnInit {

  titulo: string = ''
  descricao: string = ''
  prazo: Date = new Date()
  categoria: string = ''
  membros: string = ''
  anexo: string = '' 

  constructor(private tarefaService: CriandoTarefaService, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    try {
      this.route.params.subscribe(params => {
        this.getTarefaId(Number(params.id))
      })
    } catch (error) {
      throw error
    }
    
  }

  getTarefaId(id: number): void {
    if(id === null || id === undefined || id <= 0) {
      throw 'Erro ao encontrar o id. Verificar Possíveis erros como id null | id undefined | id <= 0'
    }

    try{
      this.tarefaService.getTarefaPorId(id)
      .subscribe(resp => {
        this.titulo = resp.titulo ? resp.titulo : ''
        this.descricao = resp.descricao ? resp.descricao : 'Sem descrição...'
        this.prazo = resp.prazo ? resp.prazo : new Date()
        this.categoria = resp.categoria ? resp.categoria : 'Trabalho'
        this.membros = resp.membros ? resp.membros : ''
        this.anexo = resp.anexo.indexOf('.pdf' || '.docx' || ".doc") != -1 ? resp.anexo : 'Sem anexos...'
      })
    }catch(error) {
      throw error
    }
  }

}
