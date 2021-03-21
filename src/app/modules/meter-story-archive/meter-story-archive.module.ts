import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterStoryArchiveRoutingModule } from './meter-story-archive-routing.module';
import { MeterStoryArchiveComponent } from './components/meter-story-archive/meter-story-archive.component';
import { EditorsModule } from '../controls/editors/editors.module';


@NgModule({
  declarations: [MeterStoryArchiveComponent],
  imports: [
    CommonModule,
    MeterStoryArchiveRoutingModule,
    EditorsModule
  ]
})
export class MeterStoryArchiveModule { }
