import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {formatDate} from '@angular/common';
import {Shift} from '../../models/shift';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ScheduleService} from '../../services/schedule.service';
import {Employee} from '../../models/employee';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.scss']
})
export class AddShiftComponent implements OnInit {
  shiftForm: FormGroup = this.fb.group( {
    date: [''],
    start: [''],
    end: ['']
  });
  @Input() employee: Employee; // IMPORTED FROM PARENT COMPONENT
  @Input() removeEditor: () => void;
  constructor(private scheduleService: ScheduleService, private fb: FormBuilder) { }
  @Output() changed = new EventEmitter();
  ngOnInit(): void {
  }
  get date(): any {
    return this.shiftForm.get('date');
  }
  get start(): any {
    return this.shiftForm.get('start');
  }
  get end(): any {
    return this.shiftForm.get('end');
  }
  addShift(): void {
    const dateVal = formatDate(this.date.value, 'yyyy-MM-dd', 'en_US' );
    const newShift: Shift = new Shift();
    newShift.date = dateVal;
    newShift.startTime = this.start.value;
    newShift.endTime = this.end.value;
    const emp = this.employee; // this.scheduleService.findEmployee(1);

    if (emp != null) {
      this.scheduleService.addShift(emp, newShift);
      this.removeEdit();
    }
  }
  removeEdit(){
    this.scheduleService.removeEditor();
  }

}
