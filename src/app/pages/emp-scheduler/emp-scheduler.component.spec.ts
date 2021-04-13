import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSchedulerComponent } from './emp-scheduler.component';

describe('EmpSchedulerComponent', () => {
  let component: EmpSchedulerComponent;
  let fixture: ComponentFixture<EmpSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
