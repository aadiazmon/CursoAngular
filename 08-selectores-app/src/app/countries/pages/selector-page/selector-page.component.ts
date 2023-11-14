import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, switchMap, tap } from 'rxjs';

import { Region, SmallCountry } from '../../interfaces/country.interface';

import { CountriesService } from '../../services/countries.service';
import { ValidatorsService } from '../../../shared/validators.service';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {
  public myForm: FormGroup = this.formBuilder.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required]
  });
  public countries: SmallCountry[] = [];
  public borders: SmallCountry[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private countriesService: CountriesService,
    private validatorsService: ValidatorsService
  ) { }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  ngOnInit(): void {
    this._onRegionChange();
    this._onCountryChange();
  }

  private _onRegionChange(): void {
    this.myForm.get('region')?.valueChanges
      .pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => this.myForm.get('border')!.setValue('')),
        tap(() => this.borders = []),
        switchMap(region => this.countriesService.getCountriesByRegion(region))
      )
      .subscribe(countries => {
        this.countries = countries;
      });
  }

  private _onCountryChange(): void {
    this.myForm.get('country')?.valueChanges
      .pipe(
        tap(() => this.myForm.get('border')!.setValue('')),
        tap(() => this.borders = []),
        filter((value: string) => value.length > 0),
        switchMap(country => this.countriesService.getBordersByCountry(country)),
        switchMap(country => this.countriesService.getCountryBordersByCodes(country.borders)),
        tap(countries => countries.length > 0 ? this.validatorsService.addValidators(this.myForm, 'border', Validators.required) : this.validatorsService.removeValidators(this.myForm, 'border', Validators.required))
      )
      .subscribe(borders => {
        this.borders = borders;
      });
  }
}
