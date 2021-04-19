import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../../models/employee';

@Component({
  selector: 'app-emp-scheduler',
  templateUrl: './emp-scheduler.component.html',
  styleUrls: ['./emp-scheduler.component.scss']
})
export class EmpSchedulerComponent implements OnInit {
  desc: string;
  title: string;
  employee: Employee;
  showSchedule = false;
  constructor(private serv: ScheduleService, private route: Router) { }
  ngOnInit(): void {
    this.desc = 'Register an employee and add shifts';
    this.title = 'SCHEDULER';
    this.serv.selectedEmp.subscribe( (data: Employee) => {
        this.employee = data;
        if (data !== null) {
           this.showSchedule = this.employee.id !== 0;
         }
    });

   }
  removeScheduleView(): void {
    this.showSchedule = false;
    this.route.navigate(['scheduler', {outlets: {editor: null}}]);
  }
}
