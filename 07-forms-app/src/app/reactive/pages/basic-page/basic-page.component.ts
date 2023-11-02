import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorsService } from 'src/app/shared/services/validators.service';

import { environment } from 'src/environments/environment.development';

const myFormDefault = { name: '', price: 0, inStorage: 0 };

@Component({
  selector: 'reactive-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnInit {
  public isDebug: boolean = environment.isDebug;

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService
  ) { }

  ngOnInit(): void {
    this.myForm.reset(myFormDefault);
  }

  public onSubmit(): void {
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset(myFormDefault);
  }

  public isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  public getFieldError(field: string): string | null {
    return this.validatorsService.getFieldError(this.myForm, field);
  }
}
