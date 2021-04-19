import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { EmpSchedulerComponent } from './pages/emp-scheduler/emp-scheduler.component';
import {ScheduleService} from './services/schedule.service';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterEmpComponent } from './components/register-emp/register-emp.component';
import { AddShiftComponent } from './components/add-shift/add-shift.component';
import { EmpCardComponent } from './components/emp-card/emp-card.component';
import { EmpCardListComponent } from './components/emp-card-list/emp-card-list.component';
import { ScheduleViewComponent } from './components/schedule-view/schedule-view.component';
import { SearchEmpComponent } from './components/search-emp/search-emp.component';
import {MainModule} from './pages/main/main.module';
import { EmpScheduleComponent } from './pages/emp-schedule/emp-schedule.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path: 'dashboard', component: EmpSchedulerComponent,
        children: [
          {path: 'register', component: RegisterEmpComponent, outlet: 'editor' },
          {path: 'shift', component: AddShiftComponent, outlet: 'editor' },
          {path: ':id', component: ScheduleViewComponent, outlet: 'schedule' }
        ]
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {path: 'demo', component: PlaygroundComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlaygroundComponent,
    EmpSchedulerComponent,
    RegisterEmpComponent,
    AddShiftComponent,
    EmpCardComponent,
    EmpCardListComponent,
    ScheduleViewComponent,
    SearchEmpComponent,
    EmpScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    MainModule,
    ReactiveFormsModule
  ],
  providers: [
    ScheduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
