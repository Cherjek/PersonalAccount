import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CERecoveryComponent } from './recovery.component';

describe('RecoveryComponent', () => {
  let component: CERecoveryComponent;
  let fixture: ComponentFixture<CERecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CERecoveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CERecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
