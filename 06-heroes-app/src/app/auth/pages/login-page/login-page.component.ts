import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor (
    private authService:AuthService,
    private router:Router
  ) { }

  public onLogin(): void {
    this.authService.login('prueba@gmail.com', '123abc')
      .subscribe(user => {
        this.router.navigate(['/']);
      });
  }
}
