import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListComponent } from './question-list.component';
import { QuestionListRouting } from './question-list-routing.module';
import { AppCommonModule } from 'src/app/app.common.module';



@NgModule({
  declarations: [
    QuestionListComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    QuestionListRouting
  ]
})
export class QuestionListModule { }
