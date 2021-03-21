import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeterStoryJournalComponent } from './components/meter-story-journal/meter-story-journal.component';

const routes: Routes = [{
  path: '',
  component: MeterStoryJournalComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterStoryJournalRoutingModule { }
