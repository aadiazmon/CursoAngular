import { Component, OnInit } from '@angular/core';

import { CountrieService } from '../../services/countrie.service';

import { Region } from '../../interfaces/region-type';
import { Countrie } from '../../interfaces/countrie-interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {
  public countries:Countrie[] = [];
  public regions:Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion:Region = '';

  constructor(private countrieService:CountrieService) { }

  public onSearch(searchValue:Region):void {
    this.selectedRegion = searchValue;

    this.countrieService.searchCountrie('region', searchValue)
      .subscribe(countries => {
        this.countries = countries;
      });
  }

  ngOnInit(): void {
    this.selectedRegion = this.countrieService.cacheStore.byRegion.region;
    this.countries = this.countrieService.cacheStore.byRegion.countries;
  }
}
