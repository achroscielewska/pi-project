import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [WarehouseComponent],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    SharedModule
  ]
})
export class WarehouseModule { }
