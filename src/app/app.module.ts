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

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  {path: 'demo', component: PlaygroundComponent},
  {path: '**', redirectTo: ''}
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
    SearchEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    ScheduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
