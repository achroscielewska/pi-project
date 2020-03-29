import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Warehouse } from '../../model/Warehouse';
import { WarehouseStoreService } from '../../service/warehouse-store.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit, OnDestroy {
  warehouse$: Observable<{}>;
  warehouseSub: Subscription;
  warehouse: {};

  constructor(private warehouseStoreService: WarehouseStoreService) { }

  ngOnInit(): void {
    this.warehouse$ = this.warehouseStoreService.currentWarehouseStore;
    this.warehouseSub = this.warehouse$.subscribe(data =>
      this.warehouse = data
    );
  }

  ngOnDestroy(): void {
    this.warehouseSub.unsubscribe();
  }

}
