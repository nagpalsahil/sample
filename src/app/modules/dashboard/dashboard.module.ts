import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
