import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ColorEnumNamePipe } from './pipes/color-enum-name.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    UncommonPageComponent,
    NumbersPageComponent,
    OrderPageComponent,

    // Pipes
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
    ColorEnumNamePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
