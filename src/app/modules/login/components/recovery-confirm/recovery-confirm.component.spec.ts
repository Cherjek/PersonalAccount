import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryConfirmComponent } from './recovery-confirm.component';

describe('RecoveryComponent', () => {
  let component: RecoveryConfirmComponent;
  let fixture: ComponentFixture<RecoveryConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveryConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
