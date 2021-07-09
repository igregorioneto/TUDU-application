import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error/error404/error404.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { BoasVindasComponent } from './inicial/boas-vindas/boas-vindas.component';
import { CadastroComponent } from './inicial/cadastro/cadastro.component';
import { InicialComponent } from './inicial/inicial/inicial.component';
import { LoginComponent } from './inicial/login/login.component';
import { CriandoTarefaComponent } from './tarefas/criando-tarefa/criando-tarefa.component';
import { MembrosComponent } from './tarefas/membros/membros.component';
import { PrincipalComponent } from './tarefas/principal/principal.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { TelaPlannerComponent } from './tarefas/tela-planner/tela-planner.component';
import { TelaTarefaComponent } from './tarefas/tela-tarefa/tela-tarefa.component';

const routes: Routes = [
  {
    path: '',
    component: InicialComponent,
    children: [
      {
        path: '',
        redirectTo: 'boas-vindas',
        pathMatch: 'full'
      },
      {
        path: 'boas-vindas',
        component: BoasVindasComponent
      },
      {
        path: 'login',
        component: LoginComponent       
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      }
    ]
  },
  {
    path: '',
    component: TarefasComponent,
    children: [
      {
        path: 'principal',
        component: PrincipalComponent
      },
      {
        path: 'criando-tarefa',
        component: CriandoTarefaComponent
      },
      {
        path: 'tela-tarefa/:id',
        component: TelaTarefaComponent
      },
      {
        path: 'tela-planner',
        component: TelaPlannerComponent
      },
      {
        path: 'membros',
        component: MembrosComponent
      }
    ],
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
