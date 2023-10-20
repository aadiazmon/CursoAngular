import { Pipe, PipeTransform } from '@angular/core';

import { Color } from '../interfaces/hero-interface';

@Pipe({
  name: 'colorEnumName'
})
export class ColorEnumNamePipe implements PipeTransform {
  public transform(value:number):string {
    return Color[value];
  }
}
