import { NgModule } from '@angular/core';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { CutTextPipe } from './pipes/cut-text.pipe';

@NgModule({
  declarations: [
    Error404PageComponent,
    CutTextPipe
  ],
  exports: [
    Error404PageComponent,
    CutTextPipe
  ]
})
export class SharedModule { }
