import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  public sidebarItems = [
    {
      label: 'Buscar',
      icon: 'search',
      url: './search'
    },
    {
      label: 'Listado',
      icon: 'label',
      url: './list'
    },
    {
      label: 'Añadir',
      icon: 'add',
      url: './new'
    }
  ]

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  get user(): User|undefined {
    return this.authService.currentUser;
  }

  public onLogOut():void {
    this.authService.logOut();
    this.router.navigate(['/auth/login']);
  }
}
