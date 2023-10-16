import { Component } from '@angular/core';

import { CountrieService } from '../../services/countrie.service';
import { Countrie } from '../../interfaces/countrie-interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {
  public countries:Countrie[] = [];

  constructor(private countrieService:CountrieService) { }

  public onSearch(searchValue:any):void {
    this.countrieService.searchCountrie('capital', searchValue)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
