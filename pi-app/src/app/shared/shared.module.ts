import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonsModule.forRoot()
  ],
  exports: [
    ButtonsModule
  ]
})
export class SharedModule { }
