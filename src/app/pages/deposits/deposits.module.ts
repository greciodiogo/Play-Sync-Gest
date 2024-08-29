import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { WithdrawRoutes } from './deposits.routing';
import { AppDepositComponent } from './deposits.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WithdrawRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    AppDepositComponent,
  ],
})
export class DepositModule {}
