import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {Employee} from '../../models/employee';
import {FormBuilder, FormGroup} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
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
    const newEmp: Employee = {email: 'johndoe@email.com', first: this.first.value, last: this.last.value, schedule: []};
    this.scheduleService.addEmployee(newEmp);
  }

}
