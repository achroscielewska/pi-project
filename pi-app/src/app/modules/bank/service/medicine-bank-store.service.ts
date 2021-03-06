import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MedicineBankService } from './medicine-bank.service';
import { MedicineBank } from '../model/MedicineBank';

@Injectable({
  providedIn: 'root'
})
export class MedicineBankStoreService {
  private medicineBankStore = new BehaviorSubject([new MedicineBank()]);
  currentMedicineBankStore = this.medicineBankStore.asObservable();

  constructor(private medicineBankService: MedicineBankService) {}

  getMedicineBankList(): void {
    this.medicineBankService.getMedicineBankElements().subscribe(
      res => this.medicineBankStore.next(res.elements),
      err => console.log(err)
    );
  }
}
