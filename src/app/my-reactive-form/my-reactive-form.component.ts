import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.scss']
})
export class MyReactiveFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      one: '',
      two: '',
      three: '',
      address: {
        street: '1',
        city: '2'
      },
      time: ''
    })
  }

  get three(): FormControl {
    return this.myForm.get('three') as FormControl;
  }

  get time(): FormControl {
    return this.myForm.get('time') as FormControl;
  }
}
