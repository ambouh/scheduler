import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {Employee} from '../../models/employee';
import {FormBuilder, FormGroup} from '@angular/forms';
import {first} from 'rxjs/operators';
import {formatDate} from '@angular/common';
import {Shift} from '../../models/shift';
import {ScheduleViewComponent} from '../../components/schedule-view/schedule-view.component';
import {AddShiftComponent} from '../../components/add-shift/add-shift.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  constructor(private scheduleService: ScheduleService, private fb: FormBuilder, private CFR: ComponentFactoryResolver) {
  }
  ngOnInit(): void {
  }
}
