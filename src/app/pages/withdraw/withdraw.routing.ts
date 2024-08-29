import { Routes } from '@angular/router';


// pages
import { AppWithdrawComponent } from './withdraw.component';

export const WithdrawRoutes: Routes = [
  {
    path: '',
    component: AppWithdrawComponent,
    data: {
      title: 'Levantamentos',
    },
  },
];
