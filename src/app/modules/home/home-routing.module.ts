import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export async function meterModuleFactory() {
  const m = await import(
    '../metering-devices/metering-devices.module'
  );
  return m.MeteringDevicesModule;
}

export async function documentsModuleFactory() {
  const m = await import(
    '../documents/documents.module'
  );
  return m.DocumentsModule;
}

export async function meterStoryModuleFactory() {
  const m = await import(
    '../meter-story/meter-story.module'
  );
  return m.MeterStoryModule;
}

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'meter-devices'
  }, {
    path: 'meter-devices',
    loadChildren: meterModuleFactory
  }, {
    path: 'documents',
    loadChildren: documentsModuleFactory
  }, {
    path: 'meter-story/:equipmentId',
    loadChildren: meterStoryModuleFactory,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
