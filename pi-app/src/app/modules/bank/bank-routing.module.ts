import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineBankComponent } from './components';

const routes: Routes = [
  {
    path: 'medicineBank',
    component: MedicineBankComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
