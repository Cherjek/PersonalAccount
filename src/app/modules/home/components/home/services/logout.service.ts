import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { GraphqlService } from 'src/app/core/services/gpraphql.service';

@Injectable()
export class LogoutService extends GraphqlService {

  constructor(public apollo: Apollo) { 
    super(apollo);
  }

  logout() {
    const mutation = gql`
    mutation logout {
      account {
        logout
      }
    }`;
    return super.mutate(mutation);
  }
}
