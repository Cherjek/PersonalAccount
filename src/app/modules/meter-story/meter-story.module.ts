import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterStoryRoutingModule } from './meter-story-routing.module';
import { MeterStoryComponent } from './components/meter-story/meter-story.component';
import { EditorsModule } from '../controls/editors/editors.module';


@NgModule({
  declarations: [MeterStoryComponent],
  imports: [
    CommonModule,
    MeterStoryRoutingModule,
    EditorsModule
  ]
})
export class MeterStoryModule { }
