import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/common/models/services/Customer.model';
import { Token } from 'src/app/common/models/services/Token.model';
import { GraphqlService } from 'src/app/core/services/gpraphql.service';
import { LoginRequest } from '../models/login-req.model';
import { LoginResponse } from '../models/login-res.model';

@Injectable()
export class LoginService extends GraphqlService {

  constructor(public apollo: Apollo) { 
    super(apollo);
  }

  login(variables: LoginRequest) {
    const mutation = gql`
    mutation login($phoneNumberOrEmail: String!, $password: String!) {
      account {
        login(password: $password, phoneNumberOrEmail: $phoneNumberOrEmail) {
          status
          customer {
            address
            email
            firstName
            id
            middleName
            phoneNumber
            surname
          }
          token {
            accessToken
            expires
            expiresIn
            issued
            tokenType
          }
        }
      }
    }`;
    return super.mutate(mutation, variables).pipe(
      map((result: any) => {
        const login = result?.data?.account?.login;
        const val = {
          status: login.status,
          token: login.token ? new Token(login.token) : undefined,
          customer: login.customer ? new Customer(login.customer) : undefined,
        };
        return new LoginResponse(val);
      })
    );
  }
}
