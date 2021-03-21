import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeterStoryArchiveComponent } from './components/meter-story-archive/meter-story-archive.component';

const routes: Routes = [{
  path: '',
  component: MeterStoryArchiveComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterStoryArchiveRoutingModule { }
