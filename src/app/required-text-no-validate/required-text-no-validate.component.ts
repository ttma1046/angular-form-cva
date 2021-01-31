import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-required-text-no-validate',
  templateUrl: './required-text-no-validate.component.html',
  styleUrls: ['./required-text-no-validate.component.scss'],
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: RequiredTextNoValidateComponent
    },
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RequiredTextNoValidateComponent
    }
  ]
})
export class RequiredTextNoValidateComponent implements ControlValueAccessor {
  @ViewChild('input', { static: true }) input: ElementRef;
  /**
   * The registered callback function called when a change event occurs on the input element.
   */
  onChange = (_: any) => {};

  /**
   * The registered callback function called when a blur event occurs on the input element.
   */
  onTouched = () => {};
  disabled: boolean;

  writeValue(value: any) {
    this.input.nativeElement.value = value;
  }

  registerOnChange(fn: (value: any) => void) {
    // save callback to call on change
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    // save callback to call on change
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    // diable or enable the field
    this.disabled = disabled;
  }

  type(input: any) {
    this.onChange(input!.target!.value);
  }

  validate(ctrl: AbstractControl) {
    return Validators.required(ctrl);
  }
}
