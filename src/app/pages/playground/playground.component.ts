import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';


export interface Subject {
  name: string;
}
@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {


  constructor(private scheduleService: ScheduleService) {
  }
  ngOnInit(): void {

  }
}
