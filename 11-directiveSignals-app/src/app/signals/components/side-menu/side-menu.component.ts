import { Component, Signal, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  // public menuItems: MenuItem[] = [
  //   { title: 'Contador', route: 'counter' },
  //   { title: 'Propiedades', route: 'properties' },
  //   { title: 'Información de usuario', route: 'user-info' }
  // ];

  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'Propiedades', route: 'properties' },
    { title: 'Usuario', route: 'user-info' }
  ]);
}
