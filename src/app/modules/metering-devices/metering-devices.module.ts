import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteringDevicesComponent } from './components/metering-devices/metering-devices.component';

import { MeteringDevicesRoutingModule } from './metering-devices-routing.module';
import { EditorsModule } from '../controls/editors/editors.module';
import { MeteringDevicesCreateComponent } from './components/metering-devices-create/metering-devices-create.component';


@NgModule({
  declarations: [
    MeteringDevicesComponent,
    MeteringDevicesCreateComponent
  ],
  imports: [
    CommonModule,
    MeteringDevicesRoutingModule,
    EditorsModule
  ]
})
export class MeteringDevicesModule { }
