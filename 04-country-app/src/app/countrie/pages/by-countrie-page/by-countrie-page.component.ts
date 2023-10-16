import { Component } from '@angular/core';

import { CountrieService } from '../../services/countrie.service';

import { Countrie } from '../../interfaces/countrie-interface';

@Component({
  selector: 'app-by-countrie-page',
  templateUrl: './by-countrie-page.component.html',
  styleUrls: ['./by-countrie-page.component.css']
})
export class ByCountriePageComponent {
  public countries:Countrie[] = [];

  constructor(private countrieService:CountrieService) { }

  public onSearch(searchValue:any):void {
    this.countrieService.searchCountrie('name', searchValue)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
