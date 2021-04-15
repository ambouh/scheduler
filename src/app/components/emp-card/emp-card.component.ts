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
}
