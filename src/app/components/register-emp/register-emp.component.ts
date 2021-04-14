import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ScheduleService} from '../../services/schedule.service';
import {Employee} from '../../models/employee';

@Component({
  selector: 'app-register-emp',
  templateUrl: './register-emp.component.html',
  styleUrls: ['./register-emp.component.scss']
})
export class RegisterEmpComponent implements OnInit {
  title = 'Hello World';
  queryForm: FormGroup = this.fb.group( {
    first: [''],
    last: [''],
    email: [''],
    id: [''],
  });

  constructor(private scheduleService: ScheduleService, private fb: FormBuilder) { }
  ngOnInit(): void {
  }
  get first(): any {
    return this.queryForm.get('first');
  }
  get last(): any {
    return this.queryForm.get('last');
  }
  get email(): any {
    return this.queryForm.get('email');
  }
  addEmployee(): void{
    const newEmp: Employee = {
      id: this.scheduleService.newEmpID(), email: 'johndoe@email.com', first: this.first.value, last: this.last.value, schedule: []};
    this.scheduleService.addEmployee(newEmp);
    this.scheduleService.removeEditor();
  }

}
