import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CERegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: CERegistrationComponent;
  let fixture: ComponentFixture<CERegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CERegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CERegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
