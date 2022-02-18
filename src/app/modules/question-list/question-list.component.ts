import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Question, QuestionType } from 'src/app/models/questions.model';
import { Customer } from 'src/app/service/customer';
import { CustomerService } from 'src/app/service/customerService';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {
  questions: Question[];

  loading:boolean = true;
  cols: any[];

  //@ViewChild('filter') filter: ElementRef;

  constructor(private messageService: MessageService, private customerService: CustomerService,private toastService: ToastService) {}

  ngOnInit() {
    this.cols = [
      { field: 'questionnaire', header: 'Questionnaire' },
      { field: 'questionType', header: 'Question Type' },
      { field: 'options', header: 'Options' },
      { field: 'activeStatus', header: 'Status' }
    ];
     this.questions=[
       {
        questionnaire: 'Past Experince with current Manager',
        questionType: QuestionType.mcq,
        options: [{ label:'Yes', weightage: 2}, { label: 'No', weightage: 0}],
        activeStatus:true
       },
       {
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
        questionnaire: 'Marital Status',
        questionType: QuestionType.mcq,
        options: [
          { label: 'Single', weightage: 0},
          { label: 'Married', weightage: 1}, 
          { label: 'Divorce', weightage: 0}],
        activeStatus:true
       },
       {
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
        questionnaire: 'Do you have a family member/ relative working in any partners bank',
        questionType: QuestionType.mcq,
        options: [{ label:'Yes', weightage: 2}, { label: 'No', weightage: 0}],
        activeStatus:true
       },
       {
        questionnaire: 'No of childrens',
        questionType: QuestionType.mcq,
        options: [{ label:'0', weightage: 2}, { label: '1 and Above', weightage: 1}],
        activeStatus:true
       },
       {
        questionnaire: 'Belongs From',
        questionType: QuestionType.text,
        activeStatus:true
       },
       {
        questionnaire: 'Prefrerred Job Location',
        activeStatus: false,
        questionType: QuestionType.text
       }
     ]
  }

  onDisabled(){
    this.toastService.clear();
    this.toastService.addSingle('success', 'Notification', 'Question disabled successfully');
  }

  onEnabled(){
    //this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    this.toastService.clear();
    this.toastService.addSingle('success', '', 'Question enabled successfully');
  }
}
