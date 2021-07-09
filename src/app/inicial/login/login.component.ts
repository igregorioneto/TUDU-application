import { Membros } from 'src/app/interfaces/membros/membros';
import { Component, OnInit } from '@angular/core';
import { MembrosService } from 'src/app/services/membros/membros.service';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { GeralService } from 'src/app/services/geral/geral.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: string = ''
  senha: string = ''

  constructor(private membrosService: MembrosService, 
            private router: Router,
            private guard: AuthGuardService,
            private geralService: GeralService) { }

  ngOnInit(): void {
  }

  login(): void {
    if(this.email.indexOf('.com') && this.senha.trim().length >= 6) {

      let validate = this.membrosService
        .loginMembro(this.email,this.senha)
        .subscribe(
          resp => {
              if(resp[0].email === this.email && resp[0].senha === this.senha) {
                window.localStorage.setItem('token', resp[0].id)
                this.guard.membroLogado()
              } else {
                this.geralService.showMsg('E-mail/Senha inválido. Por favor, verificar!',true)
              }
            },
          () => {},
          () => this.router.navigate(['/principal'])
        )

    } else if(this.email.indexOf('.com') == -1) {
        this.geralService.showMsg('Estrutura de e-mail errado!',true)
    } else if(this.senha.trim().length < 6) {
        this.geralService.showMsg('Senha menor que 6 caracteres!',true)
    }
    
  }
}
