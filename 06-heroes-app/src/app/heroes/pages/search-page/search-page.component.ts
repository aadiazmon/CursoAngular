import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Hero } from '../../interfaces/hero-interface';

import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'heroes-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public heroes:Hero[] = [];
  public selectedHero?:Hero;

  constructor(private heroesService:HeroesService) {}

  public searchHero():void {
    const query:string = this.searchInput.value || '';
    this.heroesService.getSuggestions(query)
      .subscribe(heroes => this.heroes = heroes);
  }

  public onSelectedOption(event:MatAutocompleteSelectedEvent):void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero:Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);

    this.selectedHero = hero;
  }
}
