import { Component, OnInit } from '@angular/core';
import { MedicineBankService } from '../../service/medicine-bank.service';
import { Observable, Subscription } from 'rxjs';
import { MedicineBank } from '../../model/MedicineBank';
import { MedicineBankStoreService } from '../../service/medicine-bank-store.service';

@Component({
  selector: 'app-medicine-bank',
  templateUrl: './medicine-bank.component.html',
  styleUrls: ['./medicine-bank.component.scss']
})
export class MedicineBankComponent implements OnInit {
  medicineBank$: Observable<MedicineBank[]>;
  medicineBankSub: Subscription;
  medicineBank: MedicineBank[];

  constructor(private medicineBankStoreService: MedicineBankStoreService) { }

  ngOnInit(): void {
    this.medicineBankStoreService.currentMedicineBankStore.subscribe(data => {
      this.medicineBank = data;
    });
  }
}
