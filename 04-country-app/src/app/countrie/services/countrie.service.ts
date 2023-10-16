import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

import { Countrie, Languages } from '../interfaces/countrie-interface';

@Injectable({
  providedIn: 'root'
})
export class CountrieService {
  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private httpClient:HttpClient) { }

  public searchCountrie(searchBy:string, searchValue:string): Observable<Countrie[]> {
    return this.httpClient.get<Countrie[]>(`${this.apiUrl}/${searchBy}/${searchValue}`)
      .pipe(
        catchError(() => of([]))
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
