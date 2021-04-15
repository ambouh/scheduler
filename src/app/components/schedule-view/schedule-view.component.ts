import {Component, ComponentFactoryResolver, Input, OnInit} from '@angular/core';
import {Employee} from '../../models/employee';
import {ScheduleService} from '../../services/schedule.service';
import {AddShiftComponent} from '../add-shift/add-shift.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent implements OnInit {
  employee: Employee;
  id: number;
  sub: any;
  constructor(private scheduleService: ScheduleService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    const emp = this.scheduleService.findEmployee(this.id);
    if (emp != null) {
      this.employee = emp;
    }
  }
}
