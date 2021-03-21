import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeterStoryComponent } from './components/meter-story/meter-story.component';

export async function meterStoryArchiveModuleFactory() {
  const m = await import(
    '../meter-story-archive/meter-story-archive.module'
  );
  return m.MeterStoryArchiveModule;
}

export async function meterStoryDataModuleFactory() {
  const m = await import(
    '../meter-story-data/meter-story-data.module'
  );
  return m.MeterStoryDataModule;
}

export async function meterStoryJournalModuleFactory() {
  const m = await import(
    '../meter-story-journal/meter-story-journal.module'
  );
  return m.MeterStoryJournalModule;
}

const routes: Routes = [{
  path: '',
  component: MeterStoryComponent,
  children: [
    {
      path: '',
      redirectTo: 'archive'
    },
    {
      path: 'archive',
      loadChildren: meterStoryArchiveModuleFactory
    },
    {
      path: 'data',
      loadChildren: meterStoryDataModuleFactory
    },
    {
      path: 'journals',
      loadChildren: meterStoryJournalModuleFactory
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterStoryRoutingModule { }
