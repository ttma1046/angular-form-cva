import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequiredTextComponent } from './required-text/required-text.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { AddressComponent } from './address/address.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { RequiredTextNoValidateComponent } from './required-text-no-validate/required-text-no-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    RequiredTextComponent,
    MyFormComponent,
    MyReactiveFormComponent,
    AddressComponent,
    TimePickerComponent,
    RequiredTextNoValidateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
