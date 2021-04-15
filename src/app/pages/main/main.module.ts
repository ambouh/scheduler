import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {EmpSchedulerComponent} from '../emp-scheduler/emp-scheduler.component';
import {ScheduleService} from '../../services/schedule.service';
import {RegisterEmpComponent} from '../../components/register-emp/register-emp.component';
import {AddShiftComponent} from '../../components/add-shift/add-shift.component';
import {ScheduleViewComponent} from '../../components/schedule-view/schedule-view.component';
const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path: 'dashboard', component: EmpSchedulerComponent,
        children: [
          {path: 'register', component: RegisterEmpComponent, outlet: 'editor'},
          {path: 'shift', component: AddShiftComponent, outlet: 'editor' },
          {path: ':id', component: ScheduleViewComponent, outlet: 'schedule' }
        ]
      },
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
    ScheduleService
  ]
})
export class MainModule { }
