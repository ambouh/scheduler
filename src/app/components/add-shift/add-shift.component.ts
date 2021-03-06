import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {formatDate} from '@angular/common';
import {Shift} from '../../models/shift';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ScheduleService} from '../../services/schedule.service';
import {Employee} from '../../models/employee';
import {TimeConstraintDirective} from './time-constraint.directive';


@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.scss']
})

export class AddShiftComponent implements OnInit {

  shiftForm: FormGroup = this.fb.group( {
    date: ['', [Validators.required]],
    time: this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required]
    }, {validators: this.timeConstraint.validate})
  });
  hours = [
    { id: 1, desc: '01 AM'},
    { id: 2, desc: '02 AM'},
    { id: 3, desc: '03 AM'},
    { id: 4, desc: '04 AM'},
    { id: 5, desc: '05 AM'},
    { id: 6, desc: '06 AM'},
    { id: 7, desc: '07 AM'},
    { id: 8, desc: '08 AM'},
    { id: 9, desc: '09 AM'},
    { id: 10, desc: '10 AM'},
    { id: 11, desc: '11 AM'},
    { id: 12, desc: '12 PM'},
    { id: 13, desc: '01 PM'},
    { id: 14, desc: '02 PM'},
    { id: 15, desc: '03 PM'},
    { id: 16, desc: '04 PM'},
    { id: 17, desc: '05 PM'},
    { id: 18, desc: '06 PM'},
    { id: 19, desc: '07 PM'},
    { id: 20, desc: '08 PM'},
    { id: 21, desc: '09 PM'},
    { id: 22, desc: '10 PM'},
    { id: 23, desc: '11 PM'},
    { id: 24, desc: '12 AM'},
  ];
  employee: Employee;
  constructor(private scheduleService: ScheduleService, private fb: FormBuilder, private timeConstraint: TimeConstraintDirective) { }
  ngOnInit(): void {
    this.scheduleService.selectedEmp.subscribe(data => {
      if (data.id !== 0) {this.employee = data; }
    });
  }
  get date(): any {
    return this.shiftForm.get('date');
  }
  get start(): any {
    return this.shiftForm.get('time')?.get('start');
  }
  get end(): any {
    return this.shiftForm.get('time')?.get('end');
  }
  get time(): any {
    return this.shiftForm.get('time');
  }
  addShift(): void {
    const emp = this.employee;
    if (emp != null && !this.time.errors?.time) {
    const dateVal = formatDate(this.date.value, 'yyyy-MM-dd', 'en_US' );
    const newShift: Shift = new Shift();
    newShift.date = dateVal;
    newShift.startTime = this.start.value;
    newShift.endTime = this.end.value;
    this.scheduleService.addShift(emp, newShift);
    }
  }
}
