import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ScheduleViewComponent} from '../../components/schedule-view/schedule-view.component';
import {ScheduleService} from '../../services/schedule.service';

@Component({
  selector: 'app-emp-scheduler',
  templateUrl: './emp-scheduler.component.html',
  styleUrls: ['./emp-scheduler.component.scss']
})
export class EmpSchedulerComponent implements OnInit, AfterViewInit {

  constructor(private serv: ScheduleService) { }
  @ViewChild('appendHere', { read: ViewContainerRef })
  VCR: ViewContainerRef;
  @ViewChild('appendEditor', { read: ViewContainerRef })
  editor: ViewContainerRef;
  isDisplayingScheduleView: boolean;
  ngOnInit(): void {
   }

  ngAfterViewInit(): void {
    this.serv.setEditorRef(this.editor);
    this.serv.setScheduleViewRef(this.VCR);
  }
}
