import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Customer } from 'src/app/service/customer';
import { CustomerService } from 'src/app/service/customerService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  customers1: Customer[];

  statuses: any[];

  rowGroupMetadata: any;

  expandedRows = {};

  activityValues: number[] = [0, 100];

  isExpanded: boolean = false;

  idFrozen: boolean = false;

  loading:boolean = true;

  @ViewChild('filter') filter: ElementRef;

  constructor(private customerService: CustomerService,private messageService: MessageService) {}

  ngOnInit() {
      this.customerService.getCustomersLarge().then(customers => {
          this.customers1 = customers;
          this.loading = false;

          // @ts-ignore
          this.customers1.forEach(customer => customer.date = new Date(customer.date));
      });
  }

}