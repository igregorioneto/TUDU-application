import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInsAnimation } from '../animations';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.sass'],
  animations: [
    slideInsAnimation
  ]
})
export class InicialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
  }

}
