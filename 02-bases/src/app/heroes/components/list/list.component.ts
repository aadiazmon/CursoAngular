import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroeNames: string[] = ["Spiderman", "Ironman", "Hulk"];
  public lastRemovedHeroe?:string;

  removeLastHeroe():void {
    this.lastRemovedHeroe = this.heroeNames.pop();
  }
}
