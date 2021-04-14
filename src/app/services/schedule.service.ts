import {Injectable, ViewContainerRef} from '@angular/core';
import {Employee} from '../models/employee';
import {BehaviorSubject} from 'rxjs';
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
  // SCHEDULE-VIEW
  isDisplayingScheduleView: boolean;
  scheduleViewRef: ViewContainerRef;
  // ADD SHIFT
  isDisplayingEditor: boolean;
  editorRef: ViewContainerRef;
   // CONSTRUCTOR
  constructor() {
    this.dataStore = {
      employees: this.emp
    };
    this.isDisplayingScheduleView = false;
  }
  // SCHEDULE-VIEW
  setIsDisplayingScheduleView(result: boolean) {
    this.isDisplayingScheduleView = result;
  }
  setScheduleViewRef(ref: ViewContainerRef){
    this.scheduleViewRef = ref;
  }
  removeScheduleView(){
    this.scheduleViewRef.detach(0);
    this.setIsDisplayingScheduleView(false);
  }
  // ADD-EDITOR
  setIsDisplayingEditor(result: boolean) {
    this.isDisplayingEditor = result;
  }
  setEditorRef(ref: ViewContainerRef) {
    this.editorRef = ref;
  }
  removeEditor(){
    this.editorRef.clear();
    this.setIsDisplayingEditor(false);
  }
  // BUSINESS-LOGIC STUFF
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
