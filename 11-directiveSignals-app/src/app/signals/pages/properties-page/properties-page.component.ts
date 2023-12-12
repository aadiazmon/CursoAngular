import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {
  public counter = signal(10);
  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });

  public userChangedEffect = effect(() => {
    // Cada vez que cambia un signal referenciado dentro de esta función se dispara el efecto
    console.log(`${this.user().first_name} - ${this.counter()}`)
  });

  public onFieldUpdated(field: keyof User, value: string): void {
    this.user.update(current => {
      switch(field)
      {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
      }

      return current;
    });
  }

  public increaseBy(value: number): void {
    this.counter.update(current => current + value);
  }
}
