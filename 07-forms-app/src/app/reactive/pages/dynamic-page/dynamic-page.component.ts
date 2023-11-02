import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { ValidatorsService } from 'src/app/shared/services/validators.service';

import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent {
  public isDebug: boolean = environment.isDebug;
  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favouriteGames: this.formBuilder.array([])
  });

  public newFavouriteGames: FormControl = new FormControl('', Validators.required);

  constructor(
    private formBuilder:FormBuilder,
    private validatorsService: ValidatorsService
  ) { }

  get favouriteGames() {
    return this.myForm.controls['favouriteGames'] as FormArray;
  }

  public isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  public isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return this.validatorsService.isValidFieldInArray(formArray, index);
  }

  public getFieldError(field: string): string | null {
    return this.validatorsService.getFieldError(this.myForm, field);
  }

  public onAddFavouriteGame(): void {
    if (this.newFavouriteGames.invalid) return;

    const newFavouriteGame = this.newFavouriteGames.value;

    this.favouriteGames.push(
      this.formBuilder.control(newFavouriteGame, Validators.required)
    );

    this.newFavouriteGames.reset();
  }

  public onDeleteFavouriteGame(index: number) {
    this.favouriteGames.removeAt(index);
  }

  onSubmit(): void {
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }

    (this.myForm.controls['favouriteGames'] as FormArray) = this.formBuilder.array([]);
    this.myForm.reset();
  }
}
