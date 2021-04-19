import {AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit} from '@angular/core';
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
  @Input() employee: Employee;
  id: number;
  sub: any;
  constructor(private scheduleService: ScheduleService,
              private router: Router) { }

  ngOnInit(): void {
    this.scheduleService.seletectEmp.subscribe( data => {
        this.employee = data;
    });
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
