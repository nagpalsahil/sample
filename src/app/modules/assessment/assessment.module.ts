import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './assessment/assessment.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { AssessmentRoutingModule } from './assessment.routing';



@NgModule({
  declarations: [AssessmentComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    AssessmentRoutingModule
  ]
})
export class AssessmentModule { }
