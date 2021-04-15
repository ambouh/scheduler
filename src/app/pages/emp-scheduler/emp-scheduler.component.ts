import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';

@Component({
  selector: 'app-emp-scheduler',
  templateUrl: './emp-scheduler.component.html',
  styleUrls: ['./emp-scheduler.component.scss']
})
export class EmpSchedulerComponent implements OnInit {
  desc: string;
  title: string;

  constructor(private serv: ScheduleService) { }
  ngOnInit(): void {
    this.desc = 'Register an employee and add shifts';
    this.title = 'SCHEDULER';
   }
}
