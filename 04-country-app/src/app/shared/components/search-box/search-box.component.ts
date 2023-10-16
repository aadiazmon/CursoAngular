import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input()
  public placeHolder:string = '';

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter<string>();

  emitSearch(text:string):void {
    this.onSearch.emit(text);
  }
}
