import { Injectable } from '@angular/core';
import {Employee} from '../models/employee';
import {BehaviorSubject} from 'rxjs';
import {Shift} from '../models/shift';
import {forEachComment} from 'tslint';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  // VARIABLES
  private dataStore: { employees: Employee[] };
  // private _emp: BehaviorSubject<Employee[]>;
  emp: Employee[] = [
    {
      id: 1,
      first: 'Anders',
      last: 'Anderson',
      email: 'a.anderson@email.com',
      schedule: [
        {  date: 'APR 11', startTime: '11AM', endTime: '11PM'},
        {  date: 'APR 12', startTime: '11AM', endTime: '11PM'}
      ]
    },
    {
      id: 2,
      first: 'Betty',
      last: 'Bersch',
      email: 'b.bersch@email.com',
      schedule: [
        {  date: 'APR 11', startTime: '11AM', endTime: '11PM'},
        {  date: 'APR 12', startTime: '11AM', endTime: '11PM'}
      ]
    }
  ];
   // CONSTRUCTOR
  constructor() {
    this.dataStore = {
      employees: this.emp
    };
  }
  newEmpID(): number {
    return this.dataStore.employees.length + 1;
  }
  addEmployee(newEmp: Employee): void {
    this.dataStore.employees.push(newEmp);
  }
  findEmployee(id: number): Employee | null{
    for (const emp of this.dataStore.employees) {
      if (emp.id === id) {
        return emp;
      }
    }
    return null;
  }
  addShift(employee: Employee, newShift: Shift): void{
    employee.schedule.push(newShift);
    console.log(employee.schedule);
  }
  loadEmployees() {
    return this.dataStore.employees;
  }


}
