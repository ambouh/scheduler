import {Injectable, ViewContainerRef} from '@angular/core';
import {Employee} from '../models/employee';
import {BehaviorSubject, Observable} from 'rxjs';
import {Shift} from '../models/shift';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  // VARIABLES
  private dataStore: { employees: Employee[] };
  emp: Employee[] = [
    {
      id: 1,
      first: 'Anders',
      last: 'Anderson',
      email: 'a.anderson@email.com',
      schedule: [
        {  date: '2021-04-08',  startTime: { id: 11, desc: '11 AM'}, endTime: { id: 12, desc: '12 PM'}},
        {  date: '2021-04-09',  startTime: { id: 11, desc: '11 AM'}, endTime: { id: 12, desc: '12 PM'}}
      ]
    },
    {
      id: 2,
      first: 'Betty',
      last: 'Bersch',
      email: 'b.bersch@email.com',
      schedule: [
        {  date: '2021-04-11', startTime: { id: 11, desc: '11 AM'}, endTime: { id: 12, desc: '12 PM'}},
        {  date: '2021-04-12', startTime: { id: 11, desc: '11 AM'}, endTime: { id: 12, desc: '12 PM'}}
      ]
    }
  ];
  /*selectedEmp: Employee;*/
  private selectedEmp: BehaviorSubject<Employee>;
   // CONSTRUCTOR
  constructor() {
    this.dataStore = {
      employees: this.emp
    };
    const emptyEmp: Employee = {email: '', first: '', id: 0, last: '', schedule: []};
    this.selectedEmp = new BehaviorSubject<Employee>(emptyEmp);
  }
  // SELECTED EMPLOYEE
  get seletectEmp(): Observable<Employee> {
    return this.selectedEmp.asObservable();
  }
  selectEmployee(emp: Employee): void {
    this.selectedEmp.next(emp);
  }
  // BUSINESS-LOGIC STUFF
  newEmpID(): number {
    return this.dataStore.employees.length + 1;
  }
  addEmployee(newEmp: Employee): void {
    this.dataStore.employees.push(newEmp);
  }
  findEmployee(id: number): Employee {
    let emp = this.dataStore.employees[id];
    this.selectEmployee(emp);
    return emp;
  }
  addShift(employee: Employee, newShift: Shift): void{
    employee.schedule.push(newShift);
    console.log(employee.schedule);
  }
  loadEmployees() {
    return this.dataStore.employees;
  }


}
