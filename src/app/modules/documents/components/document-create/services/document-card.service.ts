import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { GraphqlService } from 'src/app/core/services/gpraphql.service';
import Observable from 'zen-observable';
import { Attachment } from '../../documents/model/attachment.model';

const GET_FILES = gql`
  query Attachment($attachmentId: ID!) {
    document {
      attachment(attachmentId: $attachmentId) {
        content
        id
        name
        path
      }
    }
  }
`;

const CHANGED_VIEW = gql`
  mutation ChangeDocumentViewed($documentId: ID!, $viewed: Boolean!) {
    document {
      changeDocumentViewed(documentId: $documentId, viewed: $viewed) {
        viewed
        name
        id
        dateTime
        text
      }
    }
  }
`;

@Injectable()
export class DocumentCardService extends GraphqlService {

  constructor(public apollo: Apollo) { 
    super(apollo);
  }

  setViewed(documentId: number | undefined) {
    return super.mutate(CHANGED_VIEW, { documentId, viewed: true });
  }

  getFile(attachmentId: string | undefined) {
    return super.watchQuery(GET_FILES, { attachmentId })
      .pipe(
        map((result: any) => {
          return result?.data?.document?.attachment as Attachment;
        })
      );
  }
}
