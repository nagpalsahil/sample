import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RouteStateService } from 'src/app/service/route-state.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html'
})
export class AssessmentComponent implements OnInit {

  notSubmitted= true;
  city: any;
  constructor(public messageService: MessageService,private routeStateService: RouteStateService) { }

  ngOnInit(): void {
  }

  showSubmit(){
    this.notSubmitted=false;
    this.messageService.clear();
    this.messageService.add({key: 'success', severity:'success', summary: 'Confirmation', detail: 'Assessment is successfully submitted'});
    //this.routeStateService.add('Assessment', '/', null, true); 
  }
  onLogin(){
    this.routeStateService.add('Assessment', '/login', null, true); 
  }
}
