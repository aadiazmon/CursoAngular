import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '../interfaces/hero-interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  public transform(values: Hero[], sortBy?:keyof Hero | ''):Hero[] {
    switch(sortBy)
    {
      case 'name':
        return values.sort((a, b) => (a.name > b.name)? 1 : -1);
      case 'canFly':
        return values.sort((a, b) => (a.canFly > b.canFly)? 1 : -1);
      case 'color':
        return values.sort((a, b) => (a.color > b.color)? 1 : -1);
      default:
        return values;
    }
  }
}
