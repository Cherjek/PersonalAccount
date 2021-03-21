import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApplicationService } from 'src/app/common/services/forms/application.service';
import { AppLocalization } from 'src/app/core/locale';
import { DocumentCreateComponent } from '../document-create/document-create.component';
import { Attachment } from './model/attachment.model';
import { Document } from './model/document.modle';
import { DataGridService } from './services/data-grid.service';
import { DocumentsService } from './services/documents.service';

@Component({
  selector: 'pa-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  providers: [DocumentsService, DataGridService]
})
export class DocumentsComponent implements OnInit, OnDestroy {

  private $subs?: Subscription;
  locale = AppLocalization.documents;
  documents: Document[] = [];

  constructor(
    public dialog: MatDialog,
    private applicationService: ApplicationService,
    public dataGridService: DataGridService,
    private documentsService: DocumentsService
  ) { 
    if (applicationService.config != null) {
      applicationService.config.headerText = this.locale.DocumentsAndMessages;
    }
  }

  ngOnInit(): void {
    this.$subs = this.documentsService.getInbound().subscribe({
      next: (documents: Document[]) => {
        this.documents = (documents || []).map(x => {
          const clone = {...x};
          clone.status = {...x.status};
          clone.type = {...x.type};
          clone.attachments = x.attachments ? x.attachments.map((a: Attachment) => ({...a})) : undefined;
          return clone;
        });
      },
      complete: () => {},
      error: () => {}
    });
  }

  ngOnDestroy() {
    this.$subs?.unsubscribe();
  }

  cellClick(cell: { element: Document, col: string }) {
    this.dialog.open(DocumentCreateComponent, {
      data: {
        doc: cell.element
      },
      maxWidth: 630,
      minWidth: 630,
      height: '100%',
      position: {
        right: '0'
      }
    });
  }
}
