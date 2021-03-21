import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEMeteringDevicesCreateComponent } from './metering-devices-create.component';

describe('RecoveryComponent', () => {
  let component: CEMeteringDevicesCreateComponent;
  let fixture: ComponentFixture<CEMeteringDevicesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEMeteringDevicesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CEMeteringDevicesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
