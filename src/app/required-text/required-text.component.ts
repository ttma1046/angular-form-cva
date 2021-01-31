import { Component, ElementRef, Self, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'required-text',
  templateUrl: './required-text.component.html',
  styleUrls: ['./required-text.component.scss']
})
export class RequiredTextComponent {
  @ViewChild('input', { static: true }) input: ElementRef;
  /**
   * The registered callback function called when a change event occurs on the input element.
   * @nodoc
   */
  onChange = (_: any) => {};

  /**
   * The registered callback function called when a blur event occurs on the input element.
   * @nodoc
   */
  onTouched = () => {};
  disabled: boolean;

  /**
   * Dont do this, cos the custom form control/CVA becomes no more form module-agnostic
   */
  // constructor(public controlDir: FormControlName) {}
  // constructor(public controlDir: NgModel) {}
  constructor(@Self() public controlDir: NgControl) {
    controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;

    let validators = control?.validator
     ? [control.validator, Validators.required] : Validators.required;
    control?.setValidators(validators);
    control?.updateValueAndValidity();
  }

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
}
