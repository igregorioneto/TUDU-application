import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  private isAuthenticated: boolean = false

  constructor(private router: Router) { }

  canActivate() {
    return this.isAuthenticated
  }

  membroLogado(): void {
    this.isAuthenticated = true

    setTimeout(() => {
      localStorage.removeItem('token')
      this.isAuthenticated = false

      this.router.navigate(['/boas-vindas'])
      
    }, 480000);
  }

  membroDeslogado(): void {
    this.isAuthenticated = false
    localStorage.removeItem('token')
    this.router.navigate(['/boas-vindas'])
  }

}
