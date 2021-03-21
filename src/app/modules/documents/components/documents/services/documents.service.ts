import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { GraphqlService } from 'src/app/core/services/gpraphql.service';

const BODY = `
        dateTime
        id
        name
        text
        status {
          code
          id
          name
        }
        type {
          code
          id
          name
        }
        viewed
        attachments {
          id
          name
        }
`;
const DOCUMENTS = gql`
  {
    document {
      documents {
        ${BODY}
      }
    }
   }
`;

const INBOUND = gql`
  {
    document {
      inbound {
        ${BODY}
      }
    }
   }
`;

@Injectable()
export class DocumentsService extends GraphqlService {

  constructor(public apollo: Apollo) { 
    super(apollo);
  }

  getInbound() {
    return super.watchQuery(INBOUND)
      .pipe(
        map((result: any) => {
          return result?.data?.document?.inbound as Document[];
        })
      );
  }

  getDocuments() {
    return super.watchQuery(DOCUMENTS)
      .pipe(
        map((result: any) => {
          return result?.data?.document?.documents as Document[];
        })
      );
  }
}
