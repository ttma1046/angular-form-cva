import { FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AddressComponent
    }
  ]
})
export class AddressComponent implements ControlValueAccessor {
  addressForm = this.fb.group({
    street: '',
    city: ''
  })

  onTouched = () => {};

  constructor(private fb: FormBuilder) {}

  registerOnChange(fn: any): void {
    this.addressForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(val: any) {
    val && this.addressForm.setValue(val, { emitEvent: false });
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.addressForm.disable() : this.addressForm.enable();
  }
}
