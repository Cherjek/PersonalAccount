import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteringDevicesCreateComponent } from './metering-devices-create.component';

describe('MeteringDevicesCreateComponent', () => {
  let component: MeteringDevicesCreateComponent;
  let fixture: ComponentFixture<MeteringDevicesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteringDevicesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteringDevicesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
