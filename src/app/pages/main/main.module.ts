import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {EmpSchedulerComponent} from '../emp-scheduler/emp-scheduler.component';
import {ScheduleService} from '../../services/schedule.service';
const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path: 'dashboard', component: EmpSchedulerComponent},
      {path: '', redirectTo: 'dashboard'}
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
