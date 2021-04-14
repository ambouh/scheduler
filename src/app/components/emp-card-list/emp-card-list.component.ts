import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee';
import {ScheduleService} from '../../services/schedule.service';

@Component({
  selector: 'app-emp-card-list',
  templateUrl: './emp-card-list.component.html',
  styleUrls: ['./emp-card-list.component.scss']
})
export class EmpCardListComponent implements OnInit {

  constructor(private scheduleService: ScheduleService) { }
  employeeList: Employee[];
  ngOnInit(): void {
    this.employeeList = this.scheduleService.loadEmployees();
  }

}
