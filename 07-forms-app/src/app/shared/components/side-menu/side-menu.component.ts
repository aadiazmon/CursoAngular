import { Component } from '@angular/core';

import { MenuItem } from '../../interfaces/menu-item-interface'

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  public authMenu: MenuItem[] = [
    { title: 'Registrarse', route: './auth/register' }
  ];

  public reactiveMenu: MenuItem[] = [
    { title: 'Básicos', route: './reactive/basic' },
    { title: 'Dinámicos', route: './reactive/dynamic' },
    { title: 'Switches', route: './reactive/switches' }
  ];
}
