import { Routes } from '@angular/router';
import { AppDepositsComponent } from './deposits/deposits.component';

export const DepositsRoutes: Routes = [
  {
    path: '',
    component: AppDepositsComponent,
    data: {
      title: 'Starter Page',
    },
  },
];
