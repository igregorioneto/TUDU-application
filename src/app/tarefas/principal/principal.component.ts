import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/interfaces/tarefas/tarefa';
import { GeralService } from 'src/app/services/geral/geral.service';
import { CriandoTarefaService } from 'src/app/services/tarefas/criando-tarefa.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass']
})
export class PrincipalComponent implements OnInit {

  tarefas: Tarefa[] = []
  tarefasConcluidas: Tarefa[] = []
  constructor(private tarefaService: CriandoTarefaService, private geralService: GeralService) { }

  ngOnInit(): void {    
    this.tarefaService.getTarefas()
    .subscribe(resp => { this.tarefas = resp  })

    this.tarefaService.getTarefaConcluidas()
      .subscribe(resp => this.tarefasConcluidas = resp)
  }

  checkTarefa(tarefa: Tarefa): void {
    try{

      let token = localStorage.getItem('token')
      let tarefaUpdate: Tarefa
      let flag: boolean
  
      if(tarefa.concluido === true) {
        flag = false
      } else {
        flag = true
      }
  
      tarefaUpdate = {
        membro_id: Number(token),
        id: tarefa.id,
        titulo: tarefa.titulo,
        descricao: tarefa.descricao,
        prazo: tarefa.prazo,
        categoria: tarefa.categoria,
        concluido: flag,
        membros: tarefa.membros,
        anexo: tarefa.anexo,
        subTarefa: tarefa.subTarefa
      }
  
      this.tarefaService.mudarParaConcluidoTarefa(tarefaUpdate)
          .subscribe(() => {
            if(flag === true) {
              this.geralService.showMsg('Parabéns pela conclusão da tarefa!')
            } else {
              this.geralService.showMsg('Tarefa voltada com sucesso!')
            }
          })
  
      setTimeout(() => {
        this.ngOnInit()
      }, 650)

    }catch(e) {
      throw e
    }
  }

}
