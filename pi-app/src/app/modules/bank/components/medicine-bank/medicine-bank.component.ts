import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MedicineBank } from '../../model/MedicineBank';
import { MedicineBankStoreService } from '../../service/medicine-bank-store.service';

@Component({
  selector: 'app-medicine-bank',
  templateUrl: './medicine-bank.component.html',
  styleUrls: ['./medicine-bank.component.scss']
})
export class MedicineBankComponent implements OnInit, OnDestroy{
  medicineBank$: Observable<MedicineBank[]>;
  medicineBankSub: Subscription;
  medicineBank: MedicineBank[];

  constructor(private medicineBankStoreService: MedicineBankStoreService) { }

  ngOnInit(): void {
    this.medicineBank$ = this.medicineBankStoreService.currentMedicineBankStore;
    this.medicineBankSub = this.medicineBank$.subscribe(data =>
      this.medicineBank = data
    );
  }

  ngOnDestroy(): void {
    this.medicineBankSub.unsubscribe();
  }
}
