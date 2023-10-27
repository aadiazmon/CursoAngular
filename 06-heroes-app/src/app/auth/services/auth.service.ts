import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(
    private httpClient:HttpClient
  ) { }

  get currentUser(): User|undefined {
    if (!this.user) return undefined;

    return structuredClone(this.user);
  }

  public login(email: string, pass: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        tap(() => localStorage.setItem('authToken', 'asdjhfgbv7.cn9w83r6ywa93.anvwp83pp56yraw839p'))
      );
  }

  public logOut(): void {
    this.user = undefined;
    localStorage.clear();
  }

  public checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('authToken')) return of(false);

    const authToken = localStorage.getItem('authToken');

    return this.httpClient.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),
        catchError(() => of(false))
      );
  }
}
