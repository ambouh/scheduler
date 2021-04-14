import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCardListComponent } from './emp-card-list.component';

describe('EmpCardListComponent', () => {
  let component: EmpCardListComponent;
  let fixture: ComponentFixture<EmpCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
