import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public removeValidators(form: FormGroup, field: string, validators: ValidatorFn | ValidatorFn[]) {
    form.controls[field].removeValidators(validators);
    this.updateValueAndValidity(form, field);
  }

  public addValidators(form: FormGroup, field: string, validators: ValidatorFn | ValidatorFn[]) {
    form.controls[field].addValidators(validators);
    this.updateValueAndValidity(form, field);
  }

  public updateValueAndValidity(form: FormGroup, field: string) {
    form.controls[field].updateValueAndValidity();
  }
}
