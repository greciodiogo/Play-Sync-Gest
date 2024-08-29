import { Routes } from '@angular/router';


// pages
import { AppDepositComponent } from './deposits.component';

export const WithdrawRoutes: Routes = [
  {
    path: '',
    component: AppDepositComponent,
    data: {
      title: 'Depósitos',
    },
  },
];
