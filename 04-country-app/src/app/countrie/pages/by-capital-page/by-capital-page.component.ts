import { Component, OnInit } from '@angular/core';

import { CountrieService } from '../../services/countrie.service';
import { Countrie } from '../../interfaces/countrie-interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {
  public countries:Countrie[] = [];
  public isLoading:boolean = false;
  public initialSearchText:string = '';

  constructor(private countrieService:CountrieService) { }

  public onSearch(searchValue:any):void {
    this.isLoading = true;
    this.countrieService.searchCountrie('capital', searchValue)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.countries = this.countrieService.cacheStore.byCapital.countries;
    this.initialSearchText = this.countrieService.cacheStore.byCapital.text;
  }
}
