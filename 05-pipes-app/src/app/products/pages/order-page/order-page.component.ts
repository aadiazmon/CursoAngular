import { Component } from '@angular/core';

import { Color, Hero } from '../../interfaces/hero-interface';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {
  public isUpperCase:boolean = false;
  public orderBy?:keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.Azul
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.Negro
    },
    {
      name: 'IronMan',
      canFly: true,
      color: Color.Rojo
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.Rojo
    },
    {
      name: 'GreenLantern',
      canFly: true,
      color: Color.Verde
    },
  ];

  public toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrderBy(orderBy:keyof Hero):void {
    this.orderBy = orderBy;
  }
}
