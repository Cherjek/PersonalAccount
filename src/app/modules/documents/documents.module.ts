import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { EditorsModule } from '../controls/editors/editors.module';
import { DocumentsComponent } from './components/documents/documents.component';
import { DataGridModule } from '../controls/data-grid/data-grid.module';
import { DocumentCreateComponent } from './components/document-create/document-create.component';


@NgModule({
  declarations: [DocumentsComponent, DocumentCreateComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    EditorsModule,
    DataGridModule
  ]
})
export class DocumentsModule { }
