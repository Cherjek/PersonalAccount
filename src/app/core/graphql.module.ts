import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';
import { onError } from '@apollo/client/link/error';
import { AuthService } from './services/auth.service';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri: `/graphql` }),
    cache: new InMemoryCache(),
  };
}

export function createBearerApollo(httpLink: HttpLink, authService: AuthService) {
  const http = httpLink.create({ uri: `${localStorage.getItem('graphqlUriAddress')}` });
  const middleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${JSON.parse(localStorage.getItem('TOKEN_APP') as string).accessToken || null}`
      ),
    });
    return forward(operation);
  });
  const error = onError(({operation, response, graphQLErrors, networkError}) => {
    if (graphQLErrors?.some(x => x.extensions ? 
       x.extensions['code'] === 'authorization' : false) ) {
        authService.logout();
    }
    // if (graphQLErrors.status === 401) {
    //   auth.logout();
    // }
  });
  return ApolloLink.from([middleware, error, http]);
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
