import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../guards/auth-guard.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.sass']
})
export class TarefasComponent implements OnInit {

  constructor(private guard: AuthGuardService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.guard.membroDeslogado()
  }

}
