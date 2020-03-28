import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MedicineBankService } from './medicine-bank.service';

@Injectable({
  providedIn: 'root'
})
export class MedicineBankStoreService {
  private medicineBankStore = new BehaviorSubject([]);
  currentMedicineBankStore = this.medicineBankStore.asObservable();

  constructor(private medicineBankService: MedicineBankService) {}

  getMedicineBankList() {
    this.medicineBankService.getMedicineBankElements().subscribe(
      res => this.medicineBankStore.next(res),
      err => console.log(err)
    );
  }
}
