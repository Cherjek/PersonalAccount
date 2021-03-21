import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GlobalErrorHandler } from 'src/app/core/services/error-handler';
import { Attachment } from '../documents/model/attachment.model';
import { Document } from '../documents/model/document.modle';
import { DocumentCardService } from './services/document-card.service';

@Component({
  selector: 'pa-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss'],
  providers: [DocumentCardService],
})
export class DocumentCreateComponent implements OnInit {
  private $subs?: Subscription;
  document?: Document;
  files?: any[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private globalErrorHandler: GlobalErrorHandler,
    private documentCardService: DocumentCardService
  ) {
    this.document = data.doc;
  }

  ngOnInit(): void {
    this.documentCardService.setViewed(this.document?.id).subscribe({
      next: () => {
        if (this.document != null) {
          this.document.viewed = true;
        }
      },
      complete: () => {},
      error: () => {},
    });
  }

  base64toBlob = (base64Data: string, contentType: string) => {
    contentType = contentType || '';
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);

      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  }

  loadFile(id: string | undefined) {
    this.$subs = this.documentCardService.getFile(id).subscribe({
      next: (attach: Attachment) => {
        const blob = this.base64toBlob(attach.content as string, 'application/octet-stream');
        const downloadLink = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = attach.name || 'file';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        window.URL.revokeObjectURL(url);
        downloadLink.remove();
        // document.body.removeChild(downloadLink);
      },
      complete: () => {},
      error: () => {},
    });
  }
}
