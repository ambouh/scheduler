import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {Employee} from '../../models/employee';
import {FormBuilder, FormGroup} from '@angular/forms';
import {first} from 'rxjs/operators';
import {formatDate} from '@angular/common';
import {Shift} from '../../models/shift';
import {ScheduleViewComponent} from '../../components/schedule-view/schedule-view.component';
import {AddShiftComponent} from '../../components/add-shift/add-shift.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  title = 'Hello World';
  @ViewChild('appendHere', { read: ViewContainerRef })
  VCR: ViewContainerRef;
  @ViewChild('appendShiftOrRegister', { read: ViewContainerRef })
  editor: ViewContainerRef;
  isDisplayingScheduleView: boolean | undefined;
  isDisplayingEditor: boolean | undefined;
  constructor(private scheduleService: ScheduleService, private fb: FormBuilder, private CFR: ComponentFactoryResolver) { }
  ngOnInit(): void {
    this.isDisplayingScheduleView = false;
    this.isDisplayingEditor = false;
  }

  displayScheduleView() {
    if (this.isDisplayingScheduleView === false) {
      let componentFactory = this.CFR.resolveComponentFactory(ScheduleViewComponent);
      let childComponentRef = this.VCR.createComponent(componentFactory);
      this.isDisplayingScheduleView = true;
    }
  }
  displayAddShift() {
    let componentFactory = this.CFR.resolveComponentFactory(AddShiftComponent);
    let childComponentRef = this.editor.createComponent(componentFactory);
    const emp = this.scheduleService.findEmployee(1);
    if ( emp != null) {
      childComponentRef.instance.employee = emp;
      childComponentRef.instance.removeEditor = (): void => this.removeEditor();
      this.isDisplayingEditor = true;
    }

  }
  removeScheduleView() {
   this.VCR.detach(0);
   this.isDisplayingScheduleView = false;
  }
  removeEditor(): void {
    this.editor.remove(0);
    this.isDisplayingEditor = false;
  }
}
