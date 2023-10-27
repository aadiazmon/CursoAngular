import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {
  public transform(text:string, start:number, end:number): string {
    if (!text) return '';

    return (text.length > end)? (text.substring(start, end - 3) + '...') : text;
  }
}
