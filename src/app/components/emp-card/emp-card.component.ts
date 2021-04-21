import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
} from '@angular/core';
import {Employee} from '../../models/employee';
import {ScheduleService} from '../../services/schedule.service';

@Component({
  selector: 'app-emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.scss']
})
export class EmpCardComponent implements OnInit {
  @Input() employee: Employee;
  constructor(private CFR: ComponentFactoryResolver,
              private scheduleService: ScheduleService) { }

  ngOnInit(): void {
  }

  selectEmployee() {
    // console.log('employee', this.employee);
    this.scheduleService.selectEmployee(this.employee);
  }
}
