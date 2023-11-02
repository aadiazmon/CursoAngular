import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorsService } from 'src/app/shared/services/validators.service';

import { environment } from 'src/environments/environment.development';

const myFormDefault = { gender: 'M', wantNotifications: false, termsAndConditions: false };

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrls: ['./switches-page.component.css']
})
export class SwitchesPageComponent {
  public isDebug: boolean = environment.isDebug;

  public myForm: FormGroup = this.formBuilder.group({
    gender: ['M', Validators.required],
    wantNotifications: [false, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  });

  public person = {
    gender: 'M',
    wantNotifications: false
  }

  constructor(
    private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService
  ) { }

  public isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    // Utilizamos la siguiente sentencia para poder igualar "newPerson" a "this.person"
    // sin que le anada la propiedad "termsAndConditions" del formulario "this.myForm"
    const { termsAndConditions, ...newPerson } = this.myForm.value;
    this.person = newPerson;

    this.myForm.reset(myFormDefault);
  }
}
