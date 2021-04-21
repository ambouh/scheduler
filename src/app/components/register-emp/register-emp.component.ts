import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ScheduleService} from '../../services/schedule.service';
import {Employee} from '../../models/employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-emp',
  templateUrl: './register-emp.component.html',
  styleUrls: ['./register-emp.component.scss']
})
export class RegisterEmpComponent implements OnInit {
  title = 'Hello World';
  number: number = this.scheduleService.newEmpID();
  queryForm: FormGroup = this.fb.group( {
    first: ['', [Validators.required]],
    last: ['', [Validators.required]],
    email: ['', Validators.email],
    id: [ '', [Validators.required, Validators.pattern('^[0-9]*$')]],
  });

  constructor(private scheduleService: ScheduleService, private fb: FormBuilder, private  route: Router) { }
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

  get id(): any {
    return this.queryForm.get('id');
  }
  addEmployee(): void{
    if (this.queryForm.valid){
      const newEmp: Employee =
        {id: this.id.value || this.number , email: this.email.value || 'johndoe@email.com', first: this.first.value, last: this.last.value, schedule: []};
      this.scheduleService.addEmployee(newEmp);
    }
  }

  removeRegister(): void {
    this.route.navigate(['scheduler', {outlets: {editor: null}}]);
  }

  addEmployeeKey(event: KeyboardEvent): void {
    this.addEmployee();
  }
}
