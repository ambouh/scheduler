import { Injectable } from '@angular/core';
import {Employee} from '../models/employee';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  // VARIABLES
  private dataStore: { employees: Employee[] };
  private _emp: BehaviorSubject<Employee[]>;
  // CONSTRUCTOR
  constructor() {
    this.dataStore = {
      employees: []
    };
  }

  addEmployee(newEmp: Employee): void {
    this.dataStore.employees.push(newEmp);
  }
  //
  loadEmployees() {
    return this.dataStore.employees;
  }


}
