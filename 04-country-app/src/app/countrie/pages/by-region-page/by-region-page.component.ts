import { Component } from '@angular/core';

import { CountrieService } from '../../services/countrie.service';

import { Countrie } from '../../interfaces/countrie-interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {
  public countries:Countrie[] = [];

  constructor(private countrieService:CountrieService) { }

  public onSearch(searchValue:any):void {
    this.countrieService.searchCountrie('region', searchValue)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
