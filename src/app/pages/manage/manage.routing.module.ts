import { Routes } from '@angular/router';
import { AppManageComponent } from './manage.component';

export const DepositsRoutes: Routes = [
  {
    path: '',
    component: AppManageComponent,
    data: {
      title: 'Manage',
    },
  },
];
