import {Component, ComponentFactoryResolver, Input, OnInit} from '@angular/core';
import {Employee} from '../../models/employee';
import {ScheduleService} from '../../services/schedule.service';
import {AddShiftComponent} from '../add-shift/add-shift.component';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent implements OnInit {
  @Input() employee: Employee;
  @Input() removeEditor: () => void;
  constructor(private CFR: ComponentFactoryResolver,
              private scheduleService: ScheduleService) { }

  ngOnInit(): void {
  }


  removeScheduleView() {
    this.scheduleService.removeScheduleView();
  }

  displayAddShift() {
    if (!this.scheduleService.isDisplayingEditor) {
      this.scheduleService.setIsDisplayingEditor(true);
      const componentFactory = this.CFR.resolveComponentFactory(AddShiftComponent);
      const childComponentRef = this.scheduleService.editorRef.createComponent(componentFactory);
      childComponentRef.instance.employee = this.employee;
    }
  }
}
