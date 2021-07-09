import { Component, OnInit } from '@angular/core';
import { Membros } from 'src/app/interfaces/membros/membros';
import { MembrosService } from 'src/app/services/membros/membros.service';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.sass']
})
export class MembrosComponent implements OnInit {

  membros: Membros[] = []
  constructor(private membroService: MembrosService) { }

  ngOnInit(): void {
    this.membroService.listaDeMembros()
      .subscribe(resp => this.membros = resp)
  }

}
