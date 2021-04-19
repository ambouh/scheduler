import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {Router} from '@angular/router';
import {Employee} from '../../models/employee';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-emp-schedule',
  templateUrl: './emp-schedule.component.html',
  styleUrls: ['./emp-schedule.component.scss']
})
export class EmpScheduleComponent implements OnInit {
  title: any;
  desc: any;
  showSchedule: boolean;
  employee: any;
  // SELECT FORM-CONTROL
  myControl: FormGroup = this.fb.group({
    selectedEmployee: ['']
  });
  employees: Employee[];
  constructor(private serv: ScheduleService, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.title = 'DASHBOARD';
    this.desc = 'select an employee and view their schedule ';
    this.employees = this.serv.loadEmployees();
  }
  get selectedEmp(): any {
    return this.myControl.get('selectedEmployee');
  }

  onSelectedChange(): void {
    const emp = this.selectedEmp.value;
    console.log('selected: ', emp);
    this.serv.selectEmployee(emp);
    this.serv.selectedEmp.subscribe( (data: Employee) => {
      this.showSchedule = data.id !== 0;
    });
  }
}
