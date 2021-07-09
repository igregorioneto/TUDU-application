import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Membros } from 'src/app/interfaces/membros/membros';
import { GeralService } from 'src/app/services/geral/geral.service';
import { MembrosService } from 'src/app/services/membros/membros.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {

    nome: string = ''
    email: string = ''
    senha: string = ''
    reSenha: string = ''

  constructor(private membroService: MembrosService, 
              private router: Router,
              private geralService: GeralService) { }

  ngOnInit(): void {
  }

  createMembro(): void {
    try{
      let membro: Membros
      if(this.senha === this.reSenha) {
        if(this.senha.trim().length >= 6 && this.reSenha.trim().length >= 6) {
          if(this.email.indexOf('.com') != -1) {
            membro = {
              nome: this.nome,
              email: this.email,
              senha: this.senha,
            }
      
            this.serviceCreateMembro(membro)
            this.limparCampos()
    
            this.router.navigate(['/login'])
          } else {
            this.geralService.showMsg('Formato do e-mail inválido!!!',true)
          }
        } else {
          this.geralService.showMsg('A senha tem que ter no mínimo 6 caracteres!!!',true)
        }
      } else {
        this.geralService.showMsg('A confirmação da senha necessita ser igual!!!',true)
      }

    } catch(e) {
      throw e
    }
  }

  serviceCreateMembro(membro: Membros): void {
    try {
      this.membroService.createMembro(membro)
        .subscribe(() => this.geralService.showMsg('Usuário cadastrado com sucesso!!!'))
    } catch (error) {
      throw error
    }
  }

  limparCampos(): void {
    this.nome  = ''
    this.email = ''
    this.senha = ''
    this.reSenha = ''
  }

}
