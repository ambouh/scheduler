import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef
} from '@angular/core';
import {Employee} from '../../models/employee';
import {ScheduleService} from '../../services/schedule.service';
import {RegisterEmpComponent} from '../register-emp/register-emp.component';

@Component({
  selector: 'app-emp-card-list',
  templateUrl: './emp-card-list.component.html',
  styleUrls: ['./emp-card-list.component.scss']
})
export class EmpCardListComponent implements OnInit {
  constructor(private scheduleService: ScheduleService,
              private CFR: ComponentFactoryResolver) { }
  employeeList: Employee[];
  ngOnInit(): void {
    this.employeeList = this.scheduleService.loadEmployees();
  }

  displayRegisterEmp() {
    if (!this.scheduleService.isDisplayingEditor) {
      this.scheduleService.setIsDisplayingEditor(true);
      const componentFactory = this.CFR.resolveComponentFactory(RegisterEmpComponent);
      const childComponentRef = this.scheduleService.scheduleViewRef.createComponent(componentFactory);
    } else {
      this.scheduleService.removeEditor();
    }
  }
}
