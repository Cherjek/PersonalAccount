import { TestPageRoutingModule } from './test-page.module.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsModule } from '../controls/editors/editors.module';

import { CoreModule } from 'src/app/core/core.module';
import { TestPageComponent } from './components/test-page/test-page.component';

@NgModule({
  declarations: [TestPageComponent],
  imports: [CommonModule, CoreModule, EditorsModule, TestPageRoutingModule],
})
export class TestPageModule {}
