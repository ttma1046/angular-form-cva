import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TimePickerComponent,
    },
    { provide: NG_VALIDATORS, multi: true, useExisting: TimePickerComponent },
  ],
})
export class TimePickerComponent implements ControlValueAccessor, Validator {
  hoursOptions: number[] = [...Array(12).keys()].map((i) => i + 1);
  minutesOptions: number[] = [...Array(60).keys()];

  timeForm: FormGroup = this.fb.group({
    hours: ['', Validators.required],
    minutes: ['', Validators.required],
    meridian: ['', Validators.required],
  });

  onTouched = () => {};

  get hours(): FormControl | null {
    return this.timeForm.get('hours') as FormControl;
  }
  get minutes(): FormControl | null {
    return this.timeForm.get('minutes') as FormControl;
  }
  get meridian(): FormControl | null {
    return this.timeForm.get('meridian') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  validate(): ValidationErrors | null {
    if (this.timeForm.get('hours')?.dirty || this.timeForm.get('minutes')?.dirty || this.timeForm.get('meridian')?.dirty) {
      this.timeForm.get('hours')?.markAsTouched();
      this.timeForm.get('minutes')?.markAsTouched();
      this.timeForm.get('meridian')?.markAsTouched();

      this.timeForm.get('hours')?.markAsDirty();
      this.timeForm.get('minutes')?.markAsDirty();
      this.timeForm.get('meridian')?.markAsDirty();
    }

    const hourserror = this.timeForm.get('hours')?.errors ? { 'missingHour': this.timeForm.get('hours')?.errors } : null;
    const minuteserror = this.timeForm.get('minutes')?.errors ? { 'missingMinute': this.timeForm.get('minutes')?.errors } : null;
    const meridianerror = this.timeForm.get('meridian')?.errors ? { 'missingMeridian': this.timeForm.get('meridian')?.errors } : null;

    return  (this.timeForm.get('hours')?.dirty || this.timeForm.get('minutes')?.dirty || this.timeForm.get('meridian')?.dirty) 
            || (!hourserror && !minuteserror && !meridianerror) ? 
      {
        timeIncomplete: true,
        ...(hourserror && { ...hourserror }),
        ...(minuteserror && { ...minuteserror }),
        ...(meridianerror && { ...meridianerror }) 
      } : null;
  }

  ngOnInit() {}

  writeValue(obj: any): void {
    obj && this.timeForm.setValue(obj, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.timeForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.timeForm.disable() : this.timeForm.enable();
  }
}
