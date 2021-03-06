import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {EmpSchedulerComponent} from '../emp-scheduler/emp-scheduler.component';
import {ScheduleService} from '../../services/schedule.service';
import {RegisterEmpComponent} from '../../components/register-emp/register-emp.component';
import {AddShiftComponent} from '../../components/add-shift/add-shift.component';
import {ScheduleViewComponent} from '../../components/schedule-view/schedule-view.component';
import {EmpScheduleComponent} from '../emp-schedule/emp-schedule.component';
import {TimeConstraintDirective} from '../../components/add-shift/time-constraint.directive';
const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path: 'scheduler', component: EmpSchedulerComponent,
        children: [
          {path: 'register', component: RegisterEmpComponent, outlet: 'editor'},
          {path: 'shift', component: AddShiftComponent, outlet: 'editor' }
        ]
      },
      {path: 'dashboard', component: EmpScheduleComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ScheduleService,
    TimeConstraintDirective
  ]
})
export class MainModule { }
