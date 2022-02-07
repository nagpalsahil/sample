import { Component, OnInit } from '@angular/core';
import { MasterComponent } from '../master.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  model: any[];

  constructor(public master: MasterComponent) { }

  ngOnInit() {
      this.model = [
          {
              items: [
                  {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/main/dashboard']},
                  {label: 'Users',icon: 'pi pi-fw pi-list', routerLink: ['/main/user-list']}
              ]
          }
      ];
  }

  onKeydown(event: KeyboardEvent) {
      const nodeElement = (<HTMLDivElement> event.target);
      if (event.code === 'Enter' || event.code === 'Space') {
          nodeElement.click();
          event.preventDefault();
      }
  }
}
