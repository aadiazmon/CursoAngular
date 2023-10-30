import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
    private formBuilder:FormBuilder
  ) { }

  get favouriteGames() {
    return this.myForm.controls['favouriteGames'] as FormArray;
  }

  public isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
        && this.myForm.controls[field].touched;
  }

  public isValidFieldInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors
      && formArray.controls[index].touched;
  }

  public getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};
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
