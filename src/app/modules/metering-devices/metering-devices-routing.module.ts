import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteringDevicesComponent } from './components/metering-devices/metering-devices.component';

const routes: Routes = [{
  path: '',
  component: MeteringDevicesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteringDevicesRoutingModule { }
