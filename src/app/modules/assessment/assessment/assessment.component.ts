import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Question, QuestionType } from 'src/app/models/questions.model';
import { RouteStateService } from 'src/app/service/route-state.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html'
})
export class AssessmentComponent implements OnInit {
  questions: Question[];
  answers: string[];
  notSubmitted= true;
  city: any;
  probab:string;
  constructor(public messageService: MessageService,private routeStateService: RouteStateService) { }

  ngOnInit(): void {
    this.answers=[];
    this.questions=[
      {
        id: 1,
       questionnaire: 'Past Experince with current Manager',
       questionType: QuestionType.mcq,
       options: [{ label:'Yes', weightage: 2}, { label: 'No', weightage: 0}],
       activeStatus:true
      },
      {
        id: 2,
       questionnaire: 'Current Job Reference',
       questionType: QuestionType.mcq,
       options:[{ label:'Career Website', weightage: 2}, 
       { label: 'Job Portal', weightage: 0}, 
       { label: 'Directly by HR', weightage: 0}, 
       { label: 'Consultant', weightage: 0}, 
       { label: 'Employee Reference', weightage: 0}], 
       activeStatus:true
      },
      {
        id: 3,
       questionnaire: 'Marital Status',
       questionType: QuestionType.mcq,
       options: [
         { label: 'Single', weightage: 0},
         { label: 'Married', weightage: 1}, 
         { label: 'Divorce', weightage: 0}],
       activeStatus:true
      },
      {
        id: 4,
       questionnaire: 'Total Insurance Work Exp',
       questionType: QuestionType.mcq,
       options: [
         { label: 'Fresher', weightage: 0},
         { label: '1 to 3', weightage: 1},
         { label: '4 to 7', weightage: 2},
         { label: 'Above 10', weightage: 3}],
       activeStatus:true
      },
      {
        id: 5,
       questionnaire: 'Total Work Experience',
       questionType: QuestionType.mcq,
       options:[
         { label: 'Fresher', weightage: 0},
         { label: '1 to 3', weightage: 1},
         { label: '4 to 7', weightage: 2},
         { label: 'Above 10', weightage: 3}],
       activeStatus:true
      },
      {
        id: 6,
       questionnaire: 'Total Number of companies worked so far',
       questionType: QuestionType.mcq,
       options: [
         { label: '0', weightage: 0},
         { label: '1', weightage: 1},
         { label: '2 and Above', weightage: 2},
       ],
       activeStatus:true
      },
      {
        id: 7,
       questionnaire: 'Do you have a family member/ relative working in any partners bank',
       questionType: QuestionType.mcq,
       options: [{ label:'Yes', weightage: 2}, { label: 'No', weightage: 0}],
       activeStatus:true
      },
      {
        id: 8,
       questionnaire: 'No of childrens',
       questionType: QuestionType.mcq,
       options: [{ label:'0', weightage: 2}, { label: '1 and Above', weightage: 1}],
       activeStatus:true
      }
    ]
  }

  showSubmit(){
    this.notSubmitted=false;
    this.messageService.clear();
    this.messageService.add({key: 'success', severity:'success', summary: 'Confirmation', detail: 'Assessment is successfully submitted'});
    const random = Math.random();
    this.probab= random > 0.7 ? 'Low' : random> 0.4 ?  'Medium': 'High';
  }
  onLogin(){
    this.routeStateService.add('Assessment', '/login', null, true); 
  }
}
