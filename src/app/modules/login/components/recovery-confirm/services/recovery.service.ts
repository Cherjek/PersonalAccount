import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/common/models/services/Customer.model';
import { Token } from 'src/app/common/models/services/Token.model';
import { GraphqlService } from 'src/app/core/services/gpraphql.service';

@Injectable()
export class RecoveryService extends GraphqlService {

  constructor(public apollo: Apollo) { 
    super(apollo);
  }

  recovery(variables: string) {
    const mutation = gql`
    mutation confirmRecovery($confirmationCode: String!, $password: String!, $phoneNumberOrEmail: String!) {
      account {
        confirmRecovery(confirmationCode: $confirmationCode, password: $password, phoneNumberOrEmail: $phoneNumberOrEmail) {
          status
        }
      }
    }`;
    return super.mutate(mutation, variables).pipe(
      map((result: any) => {
        return result?.data?.account?.confirmRecovery?.status;
      })
    );
  }
}
