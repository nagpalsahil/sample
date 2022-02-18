import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Participant, RetentionProbablity } from 'src/app/models/participant.model';
import { Customer } from 'src/app/service/customer';
import { CustomerService } from 'src/app/service/customerService';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  participants: Participant[];

  loading:boolean = true;
  cols: any[];
  counter=1;
  //@ViewChild('filter') filter: ElementRef;

  constructor(private messageService: MessageService, private toastService: ToastService) {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Sr. No.'},
      { field: 'name', header: 'Name' },
      { field: 'pannumber', header: 'PAN Number' },
      { field: 'probablity', header: 'Retention probability' },
      { field: 'createdAt', header: 'Created At' }
    ];
     this.participants=[
      {
        id: 1,
        name: 'Rahul Nagpal',
        pannumber:'HFRGE1822R',
        probablity: RetentionProbablity.High,
        createdAt: '11 November, 2021'
      },
      {
        id: 2,
        name: 'Sahil',
        pannumber:'UTSND8574G',
        probablity: RetentionProbablity.Low,
        createdAt: '9 February, 2022'
      },
      {
        id: 3,
        name: 'Manu Paul',
        pannumber:'NJDFD7743G',
        probablity: RetentionProbablity.Medium,
        createdAt: '20 December, 2021'
      },
      {
        id: 4,
        name: 'Ajay',
        pannumber:'HFUEF9593G',
        probablity: RetentionProbablity.Low,
        createdAt: '18 November, 2021'
      },
      {
        id: 5,
        name: 'Mahavir',
        pannumber:'KKFDF5293H',
        probablity: RetentionProbablity.High,
        createdAt: '19 November, 2021'
      },
      {
        id: 6,
        name: 'Naresh',
        pannumber:'SDNKD8484N',
        probablity: RetentionProbablity.High,
        createdAt: '11 November, 2021'
      },
      {
        id: 7,
        name: 'Romika',
        pannumber:'OEURO3432K',
        probablity: RetentionProbablity.Low,
        createdAt: '9 January, 2022'
      },
      {
        id: 8,
        name: 'Mehak',
        pannumber:'NFDKF3434J',
        probablity: RetentionProbablity.Medium,
        createdAt: '20 January, 2022'
      },
      {
        id: 9,
        name: 'Sonali',
        pannumber:'NJFDF4343U',
        probablity: RetentionProbablity.Low,
        createdAt: '18 January, 2022'
      },
      {
        id: 10,
        name: 'Astha',
        pannumber:'OFJDF8434H',
        probablity: RetentionProbablity.Medium,
        createdAt: '19 January, 2022'
      }
     ]
  }
}
