import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CERecoveryConfirmComponent } from './recovery-confirm.component';

describe('RecoveryComponent', () => {
  let component: CERecoveryConfirmComponent;
  let fixture: ComponentFixture<CERecoveryConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CERecoveryConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CERecoveryConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
