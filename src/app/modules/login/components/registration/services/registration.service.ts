import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/common/models/services/Customer.model';
import { GraphqlService } from 'src/app/core/services/gpraphql.service';
import Observable from 'zen-observable';
import { RegistrationResponse } from '../models/registration-res.model';

const REG_POST = gql`
  mutation startRegistration($surname: String!, $firstName: String!, $password: String!, $email: String!, $middleName: String!, $phoneNumber: String!) {
    account {
      startRegistration(customer: {surname: $surname, firstName: $firstName, password: $password, email: $email, middleName: $middleName, phoneNumber: $phoneNumber}) {
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
      }
    }
  }`;

@Injectable()
export class RegistrationService extends GraphqlService {

  constructor(public apollo: Apollo) { 
    super(apollo);
  }

  registration(variables: Customer) {
    return super.mutate(REG_POST, variables).pipe(
      map((result: any) => {
        const reg = result?.data?.account?.startRegistration;
        const val = {
          status: reg.status,
          customer: reg.customer ? new Customer(reg.customer) : undefined,
        };
        return new RegistrationResponse(val);
      })
    );
  }

}
