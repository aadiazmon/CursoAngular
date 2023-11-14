import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, map, of } from 'rxjs';

import { Country, Region, SmallCountry } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private _baseUrl: string = 'https://restcountries.com/v3.1';
  private _regions: Region[] = [Region.Africa, Region.America, Region.Asia, Region.Europe, Region.Oceania];

  constructor(
    private httpClient: HttpClient
  ) { }

  get regions(): Region[] {
    return [...this._regions]; // Usamos "..." para romper la relación con this._regions y que no sea modificado
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if(!region) return of([]);

    return this.httpClient.get<Country[]>(`${ this._baseUrl }/region/${ region }?fields=cca3,borders,name`)
      .pipe(
        map(countries => countries.map(country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? []
        })))
      )
  }

  getBordersByCountry(country: string): Observable<SmallCountry> {
    if(!country) return of();

    return this.httpClient.get<Country>(`${ this._baseUrl }/alpha/${ country }?fields=cca3,borders,name`)
      .pipe(
        map(country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? []
        }))
      )
  }

  getCountryBordersByCodes(borders: string[]): Observable<SmallCountry[]> {
    if(!borders || borders.length === 0) return of([]);

    const countryRequests: Observable<SmallCountry>[] = [];

    borders.forEach(border => {
      const request: Observable<SmallCountry> = this.getBordersByCountry(border);
      countryRequests.push(request);
    });

    return combineLatest(countryRequests);
  }
}
