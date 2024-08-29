import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { WithdrawRoutes } from './withdraw.routing';
import { AppWithdrawComponent } from './withdraw.component';


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
    AppWithdrawComponent,
  ],
})
export class WithdrawModule {}
