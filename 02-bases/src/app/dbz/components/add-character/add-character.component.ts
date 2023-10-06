import { Component, EventEmitter, Output } from '@angular/core';

import {v4 as uuid} from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  };

  emitCharacter():void {
    console.log(this.character);

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {
      id: uuid(),
      name: '',
      power: 0
    }
  }
}
