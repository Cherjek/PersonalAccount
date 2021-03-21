import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterStoryJournalRoutingModule } from './meter-story-journal-routing.module';
import { MeterStoryJournalComponent } from './components/meter-story-journal/meter-story-journal.component';


@NgModule({
  declarations: [MeterStoryJournalComponent],
  imports: [
    CommonModule,
    MeterStoryJournalRoutingModule
  ]
})
export class MeterStoryJournalModule { }
