import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, FormArray, AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public isUsernameValid(control: FormControl): ValidationErrors | null {
    const username: string = control.value.trim().toLowerCase();

    if (username === 'strider') return { usernameTaken: true };

    return null;
  }

  public isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors
        && form.controls[field].touched;
  }

  public getFieldError(form: FormGroup, field: string): string | null {
    if (!form.controls[field]) return null;

    const errors = form.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Este campo debe contener al menos ${ errors['minlength'].requiredLength } caracteres.`;
      }
    }
    return null;
  }

  public isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return formArray.controls[index].errors
      && formArray.controls[index].touched;
  }

  public areFieldsEquals(fieldOne: string, fieldTwo: string): ValidationErrors | null {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldOneValue = formGroup.get(fieldOne)?.value;
      const fieldTwoValue = formGroup.get(fieldTwo)?.value;

      if (fieldOneValue !== fieldTwoValue) {
        formGroup.get(fieldTwo)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      formGroup.get(fieldTwo)?.setErrors(null);

      return null;
    };
  }
}
