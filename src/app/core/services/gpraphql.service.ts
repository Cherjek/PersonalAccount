import { Apollo, gql } from 'apollo-angular';

export class GraphqlService {
  constructor(public apollo: Apollo) {}

  protected watchQuery<T>(query: any, variables?: any) {
    return this.apollo.watchQuery<any>({
      query,
      variables
    }).valueChanges;
  }

  protected mutate<T>(mutation: any, variables?: any) {
    return this.apollo.mutate<T>({
      variables,
      mutation,
    });
  }
}
