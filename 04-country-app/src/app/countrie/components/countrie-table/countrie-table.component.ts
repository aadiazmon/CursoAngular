import { Component, Input } from '@angular/core';

import { Countrie } from '../../interfaces/countrie-interface';

@Component({
  selector: 'countrie-countrie-table',
  templateUrl: './countrie-table.component.html',
  styleUrls: ['./countrie-table.component.css']
})
export class CountrieTableComponent {
  @Input()
  public countries:Countrie[] = [];

}
