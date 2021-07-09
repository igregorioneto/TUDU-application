import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Tarefa } from 'src/app/interfaces/tarefas/tarefa';
import { GeralService } from 'src/app/services/geral/geral.service';
import { CriandoTarefaService } from 'src/app/services/tarefas/criando-tarefa.service';

@Component({
  selector: 'app-criando-tarefa',
  templateUrl: './criando-tarefa.component.html',
  styleUrls: ['./criando-tarefa.component.sass']
})
export class CriandoTarefaComponent implements OnInit {

  titulo: string = ''
  descricao: string = ''
  prazo?: Date
  categoria: string = ''
  membros: string = ''
  anexo: string = ''
  subTarefa?: string[]

  subtarefas: string[] = ['sub-tarefa exemplo 1','sub-tarefa exemplo 2']


  constructor(private criandoService: CriandoTarefaService, 
              private fb: FormBuilder,
              private geralService: GeralService) { }

  ngOnInit(): void {
  }

  verificarCampos(tarefa: Tarefa): void {
    this.fb.group({
        titulo: [tarefa.titulo,[Validators.required]],
        descricao: [tarefa.descricao],
        prazo: [tarefa.prazo || new Date()],
        categoria: [tarefa.categoria],
        membros: [tarefa.membros],
        anexo: [tarefa.anexo],
        subTarefa: [tarefa.subTarefa]
    })
  }

  criarTarefa(): void {
    let tarefa: Tarefa
    let token = localStorage.getItem('token')
    if(this.titulo !== undefined && this.titulo !== '' && this.titulo !== null) {

      tarefa = {
        membro_id: Number(token),
        titulo: this.titulo ,
        descricao: this.descricao,
        prazo: this.prazo || new Date(),
        categoria: this.categoria,
        concluido: false,
        membros: this.membros,
        anexo: this.anexo,
        subTarefa: this.subTarefa
      }

      this.verificarCampos(tarefa)
      this.criandoTarefaService(tarefa)
    } else {
      this.geralService.showMsg('Pelo menos o Título é obrigatório!',true)
    }
  }

  criandoTarefaService(tarefa: Tarefa): void {
    this.criandoService.criarTarefa(tarefa)
    .subscribe(() => {
       this.limparCampos()
    })

    console.log(tarefa)
  }

  limparCampos(): void {
    this.titulo = ''
    this.descricao = ''
    this.prazo = new Date()
    this.categoria = ''
    this.membros = ''
    this.anexo = ''
  }

}
