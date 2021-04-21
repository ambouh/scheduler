import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {Time} from '../../models/time';

export const timeConstraint: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const start: Time = control.get('start')?.value;
  const end: Time = control.get('end')?.value;
  const result: boolean = (start.id >=  end.id);
  return  result ? {time: true} : null;
};
@Directive({
  selector: '[appTimeConstraint]',
  providers: [{provide: NG_VALIDATORS, useExisting: TimeConstraintDirective, multi: true}]
})
export class TimeConstraintDirective implements Validator {
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return timeConstraint(control);
  }

}
