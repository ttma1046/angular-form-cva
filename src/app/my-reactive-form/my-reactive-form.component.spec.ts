import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReativeFormComponent } from './my-reative-form.component';

describe('MyReativeFormComponent', () => {
  let component: MyReativeFormComponent;
  let fixture: ComponentFixture<MyReativeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReativeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
