import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropDirective } from './drag-drop.directive';
import { HotKeysDirective } from './hot-keys.directive';



@NgModule({
  declarations: [
    DragDropDirective,
    HotKeysDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DragDropDirective,
    HotKeysDirective
  ]
})
export class SharedDirectivesModule { }
