import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { UserListRoutingModule } from './user-list.routing';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    UserListRoutingModule
  ]
})
export class UserListModule { }
