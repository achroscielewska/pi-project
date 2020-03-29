import { Component, OnInit } from '@angular/core';
import { MedicineBankStoreService } from './modules/bank/service/medicine-bank-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'pi-app';

  constructor(private medicineBankStoreService: MedicineBankStoreService) { }

  ngOnInit(): void {
    this.medicineBankStoreService.getMedicineBankList();
  }
}
