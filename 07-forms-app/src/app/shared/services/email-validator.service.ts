import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const value = control.value;
    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {
      if (value === 'prueba@prueba.com') {
        subscriber.next({ emailTaken: true });
        subscriber.complete(); // return;
      }

      subscriber.next(null);
      subscriber.complete();
    }).pipe(
      delay(2000)
    );

    return httpCallObservable;
  }

  /*
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const value = control.value;

    return of({
      emailTaken: true
    }).pipe(
      delay(2000)
    );
  }
  */
}
