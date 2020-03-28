import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';

import { MedicineBankComponent } from './components';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MedicineBankComponent],
  imports: [
    CommonModule,
    BankRoutingModule,
    SharedModule
  ]
})
export class BankModule { }
