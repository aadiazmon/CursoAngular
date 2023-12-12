import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = '#00ff00';
  private _errors?: ValidationErrors | null;

  @Input()
  public set color(color:string) {
    this._color = color;
    this.setStyle();
  }

  @Input()
  public set errors(errors: ValidationErrors | null | undefined) {
    this._errors = errors;
    this.setErrorMessaje();
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.htmlElement = elementRef;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  public setStyle(): void {
    if (!this.htmlElement) return;

    this.htmlElement.nativeElement.style.color = this._color;
  }

  public setErrorMessaje(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerHTML = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerHTML = 'El campo es requerido';
      return;
    }

    if (errors.includes('minlength')) {
      this.htmlElement.nativeElement.innerHTML = 'El campo debe contener al menos 6 caracteres';
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerHTML = 'El campo debe ser un email válido';
      return;
    }
  }
}
