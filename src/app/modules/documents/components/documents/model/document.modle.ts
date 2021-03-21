import { Attachment } from './attachment.model';
import { DocumentStatusType } from './document-status.model';
import { DocumentType } from './document-type.model';

export class Document {
  [key: string]: any;
  attachments?: Attachment[];
  dateTime?: Date;
  id?: number;
  name?: string;
  status?: DocumentStatusType;
  text?: string;
  type?: DocumentType;
  viewed?: boolean;
  constructor(options: {
    attachments?: Attachment[];
    dateTime?: Date;
    id?: number;
    name?: string;
    status?: DocumentStatusType;
    text?: string;
    type?: DocumentType;
    viewed?: boolean;
  }) {
    this.attachments = options.attachments;
    this.dateTime = options.dateTime;
    this.id = options.id;
    this.name = options.name;
    this.status = options.status;
    this.text = options.text;
    this.type = options.type;
    this.viewed = options.viewed;
  }
}
