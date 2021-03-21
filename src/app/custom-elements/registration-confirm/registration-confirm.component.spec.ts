import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CERegistrationConfirmComponent } from './registration-confirm.component';

describe('RegistrationComponent', () => {
  let component: CERegistrationConfirmComponent;
  let fixture: ComponentFixture<CERegistrationConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CERegistrationConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CERegistrationConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
