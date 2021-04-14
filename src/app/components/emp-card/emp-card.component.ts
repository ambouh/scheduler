import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Employee} from '../../models/employee';
import {ScheduleViewComponent} from '../schedule-view/schedule-view.component';
import {ScheduleService} from '../../services/schedule.service';

@Component({
  selector: 'app-emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.scss']
})
export class EmpCardComponent implements OnInit {
  @Input() employee: Employee;
  isDisplayingScheduleView: boolean | undefined;
  constructor(private CFR: ComponentFactoryResolver,
              private scheduleService: ScheduleService) { }

  ngOnInit(): void {
  }
  displayScheduleView() {
    if (!this.scheduleService.isDisplayingScheduleView) {
      this.scheduleService.setIsDisplayingScheduleView(true);
      if ( this.employee != null) {
        const componentFactory = this.CFR.resolveComponentFactory(ScheduleViewComponent);
        const childComponentRef =
          this.scheduleService.scheduleViewRef.createComponent(componentFactory);
        childComponentRef.instance.employee = this.employee;
      }
    } else {
      this.scheduleService.removeScheduleView();
      this.displayScheduleView();
    }
  }


}
