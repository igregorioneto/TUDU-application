import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/interfaces/tarefas/tarefa';
import { CriandoTarefaService } from 'src/app/services/tarefas/criando-tarefa.service';

@Component({
  selector: 'app-tela-planner',
  templateUrl: './tela-planner.component.html',
  styleUrls: ['./tela-planner.component.sass']
})
export class TelaPlannerComponent implements OnInit {

  inputDate: string = ''

  tarefas: Tarefa[] = []

  constructor(private tarefaService: CriandoTarefaService) { }

  ngOnInit(): void {
  }

  pesquisaDate() {
    this.tarefas = []
    this.tarefaService.pesquisaTarefaPorData(this.inputDate)
    .subscribe(
      resp => {
        try {
          if(resp.length > 0) {
            this.tarefas = resp
          }
        }catch(e) {
          throw e
        }
      },
      () => {throw "Data não encontrada"},
      () => {})
  }

}
