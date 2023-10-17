import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { Region } from '../interfaces/region-type';
import { Countrie } from '../interfaces/countrie-interface';
import { CacheStore } from '../interfaces/cache-store-interface';

@Injectable({
  providedIn: 'root'
})
export class CountrieService {
  private apiUrl:string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore = {
    byCapital: {text: '', countries: []},
    byCountrie: {text: '', countries: []},
    byRegion: {region: '', countries: []}
  }

  constructor(private httpClient:HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage():void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage():void {
    if(!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  public searchCountrie(searchBy:string, searchValue:Region): Observable<Countrie[]> {
    return this.httpClient.get<Countrie[]>(`${this.apiUrl}/${searchBy}/${searchValue}`)
      .pipe(
        catchError(() => of([])),
        tap(c => {
          switch(searchBy)
          {
            case 'capital':
              this.cacheStore.byCapital = {text: searchValue, countries: c}
              break;
            case 'name':
              this.cacheStore.byCountrie = {text: searchValue, countries: c}
              break;
            case 'region':
              this.cacheStore.byRegion = {region: searchValue, countries: c}
              break;
          }
        }),
        tap(() => this.saveToLocalStorage()),
      );
  }

  public searchCountrieById(searchBy:string, searchValue:string): Observable<Countrie | undefined> {
    return this.httpClient.get<Countrie[]>(`${this.apiUrl}/${searchBy}/${searchValue}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : undefined),
      catchError(() => of(undefined))
    );
  }
}
