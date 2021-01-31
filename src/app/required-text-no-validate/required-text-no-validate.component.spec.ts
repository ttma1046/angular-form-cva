import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredTextNoValidateComponent } from './required-text-no-validate.component';

describe('RequiredTextNoValidateComponent', () => {
  let component: RequiredTextNoValidateComponent;
  let fixture: ComponentFixture<RequiredTextNoValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredTextNoValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredTextNoValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
