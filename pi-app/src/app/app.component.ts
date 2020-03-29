import { Component, OnInit } from '@angular/core';
import { MedicineBankStoreService } from './modules/bank/service/medicine-bank-store.service';
import { WarehouseStoreService } from './modules/warehouse/service/warehouse-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'pi-app';

  constructor(
    private medicineBankStoreService: MedicineBankStoreService,
    private warehouseStoreService: WarehouseStoreService
  ) { }

  ngOnInit(): void {
    this.medicineBankStoreService.getMedicineBankList();
    this.warehouseStoreService.getWarehouse('AGA');
  }
}
