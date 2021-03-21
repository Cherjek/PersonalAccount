import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterStoryDataRoutingModule } from './meter-story-data-routing.module';
import { MeterStoryDataComponent } from './components/meter-story-data/meter-story-data.component';


@NgModule({
  declarations: [MeterStoryDataComponent],
  imports: [
    CommonModule,
    MeterStoryDataRoutingModule
  ]
})
export class MeterStoryDataModule { }
