import { Component } from '@angular/core';

import { Observable, interval, tap } from 'rxjs';

type Gender = 'male' | 'female' | '';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18nSelect
  public name:string = 'Alejandro';
  public gender:Gender = 'male';
  public invitationMap = {
    male:'invitarlo',
    female:'invitarla'
  };

  public changeClient():void {
    this.name = 'Clara';
    this.gender = 'female';
  }

  // i18nPlural | slice
  public clients:string[] = ['María', 'Pedro', 'Fernando', 'Eduardo', 'Alejandro', 'Clara'];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  public removeClient():void {
    this.clients.shift();
  }

  // Json | KeyValue
  public person ={
    name: 'Alejandro',
    age: 29,
    address: 'S/C de Tenerife, Canarias'
  }

  // Async
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value => console.log(`Tap: ${value}`))
  );

  public promiseValue:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('Obtenemos datos en la promesa')
    }, 3000);
  });
}
