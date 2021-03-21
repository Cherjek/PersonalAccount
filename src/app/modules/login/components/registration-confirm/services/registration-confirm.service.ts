import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/common/models/services/Customer.model';
import { Token } from 'src/app/common/models/services/Token.model';
import { GraphqlService } from 'src/app/core/services/gpraphql.service';
import { RegistrationConfirmResponse } from '../models/registration-conf-res.model';

const REG_POST = gql`
  mutation confirmRegistration($confirmationCode: String!, $customerId: ID!) {
    account {
      confirmRegistration(confirmationCode: $confirmationCode, customerId: $customerId) {
        customer {
          address
          email
          firstName
          id
          middleName
          phoneNumber
          surname
        }
        status
        token {
          accessToken
          expires
          expiresIn
          issued
          refreshToken
          tokenType
        }
      }
    }
  }`;

@Injectable()
export class RegistrationConfirmService extends GraphqlService {

  constructor(public apollo: Apollo) { 
    super(apollo);
  }

  confirm(variables: Customer) {
    return super.mutate(REG_POST, variables).pipe(
      map((result: any) => {
        const reg = result?.data?.account?.confirmRegistration;
        const val = {
          status: reg.status,
          token: reg.token ? new Token(reg.token) : undefined,
          customer: reg.customer ? new Customer(reg.customer) : undefined,
        };
        return new RegistrationConfirmResponse(val);
      })
    );
  }

}
