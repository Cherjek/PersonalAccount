import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { GraphqlService } from 'src/app/core/services/gpraphql.service';
import Observable from 'zen-observable';
import { RecoveryRequest } from '../models/recovery-req.model';
import { RecoveryStatus } from '../models/recovery-res.model';

@Injectable()
export class RecoveryService extends GraphqlService {

  constructor(public apollo: Apollo) { 
    super(apollo);
  }

  recovery(variables: RecoveryRequest) {
    const mutation = gql`
    mutation startRecovery($phoneNumberOrEmail: String!) {
      account {
        startRecovery(phoneNumberOrEmail: $phoneNumberOrEmail) {
          status
        }
      }
    }`;
    return super.mutate(mutation, variables).pipe(
      map((result: any) => {
        return result?.data?.account?.startRecovery?.status;
      })
    );
  }
}
