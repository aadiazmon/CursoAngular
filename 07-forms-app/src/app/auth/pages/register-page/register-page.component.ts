import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment.development';

import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/services/email-validator.service';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  public isDebug: boolean = environment.isDebug;
  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorsService.isUsernameValid]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirmation: ['', Validators.required],
  }, {
    validators: [
      this.validatorsService.areFieldsEquals('password', 'passwordConfirmation')
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidatorService: EmailValidatorService
  ) { }

  public isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }
}
