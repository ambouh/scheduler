import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface Subject {
  name: string;
}
@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  heroForm: FormGroup;

  constructor(private scheduleService: ScheduleService, private fb: FormBuilder, private CFR: ComponentFactoryResolver) {
  }
  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
    });
    console.log(this.name?.errors);
  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }
}
