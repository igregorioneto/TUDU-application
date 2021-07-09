import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boas-vindas',
  templateUrl: './boas-vindas.component.html',
  styleUrls: ['./boas-vindas.component.sass']
})
export class BoasVindasComponent implements OnInit {

  token = localStorage.getItem('token')
  constructor() { }

  ngOnInit(): void {
  }

}
