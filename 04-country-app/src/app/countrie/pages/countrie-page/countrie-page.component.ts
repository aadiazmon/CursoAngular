import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

import { CountrieService } from '../../services/countrie.service';
import { Countrie } from '../../interfaces/countrie-interface';

@Component({
  selector: 'app-countrie-page',
  templateUrl: './countrie-page.component.html',
  styleUrls: ['./countrie-page.component.css']
})
export class CountriePageComponent implements OnInit {
  public countrie?:Countrie;

  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private countrieService:CountrieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countrieService.searchCountrieById('alpha', id))
    )
    .subscribe(result => {
      if(!result) this.router.navigateByUrl('');

      this.countrie = result;
    });
  }
}
