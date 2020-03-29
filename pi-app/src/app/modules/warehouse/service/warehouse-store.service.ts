import { Injectable } from '@angular/core';
import { WarehouseService } from './warehouse.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseStoreService {
  private warehouseStore = new BehaviorSubject({});
  currentWarehouseStore = this.warehouseStore.asObservable();


  constructor(private warehouseService: WarehouseService) { }

  getWarehouse(code: string): void {
    this.warehouseService.getWarehouseByCode(code).subscribe(
      res => this.warehouseStore.next(res.elements),
      err => console.log(err)
    );
  }
}
