import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoasVindasComponent } from './inicial/boas-vindas/boas-vindas.component';
import { LoginComponent } from './inicial/login/login.component';
import { CadastroComponent } from './inicial/cadastro/cadastro.component';
import { InicialComponent } from './inicial/inicial/inicial.component';
import { PrincipalComponent } from './tarefas/principal/principal.component';
import { CriandoTarefaComponent } from './tarefas/criando-tarefa/criando-tarefa.component';
import { TelaTarefaComponent } from './tarefas/tela-tarefa/tela-tarefa.component';
import { TelaPlannerComponent } from './tarefas/tela-planner/tela-planner.component';
import { TarefasComponent } from './tarefas/tarefas.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MembrosComponent } from './tarefas/membros/membros.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { Error404Component } from './error/error404/error404.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    BoasVindasComponent,
    LoginComponent,
    CadastroComponent,
    InicialComponent,
    PrincipalComponent,
    CriandoTarefaComponent,
    TelaTarefaComponent,
    TelaPlannerComponent,
    TarefasComponent,
    MembrosComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
