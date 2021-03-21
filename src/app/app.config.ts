import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import {
  ApplicationConfig,
  ApplicationInfo,
  AccessRequestType
} from './common/models/forms';
import { Apollo, gql } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationService } from './common/services/forms/application.service';

const APP_POST = gql`
{
  application {
    info {
      accessRequestType
      name
      registrationEnabled
    }
  }
}
`;

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  constructor(
    private applicationService: ApplicationService,
    private http: HttpClient, 
    private httpLink: HttpLink,
    private apollo: Apollo) {}

  /**
   * This method:
   *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
   *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
   */
  public load() {
    let mode: string;
    if (environment.production) {
      mode = 'prod';
    } else {
      mode = 'dev';
    }
    // application
    return new Promise((resolve, reject) => {
      const promise =
        // add graphql app config - graphiql/application/info
        this.http
          .get<ApplicationConfig>('assets/content/config/app.' + mode + '.json')
          .toPromise()
        .then(
          (
            result: ApplicationConfig
          ) => {

            this.applicationService.appConfig = result;
            localStorage.setItem('graphqlUriAddress', result.graphiqlServer);
            this.apollo
                .client
                .setLink(this.httpLink.create({uri: result.graphiqlServer}));
            this.apollo
              .watchQuery({
                query: APP_POST
              })
              .valueChanges.subscribe((res: any) => {
                const info = res?.data?.application?.info;
                this.applicationService.appInfo = new ApplicationInfo({
                  accessRequestType: 
                    info.accessRequestType === 'ALLOWED_WITH_CONFIRM' ? AccessRequestType.ALLOWED_WITH_CONFIRM :
                    info.accessRequestType === 'DISALLOWED' ? AccessRequestType.DISALLOWED :
                    AccessRequestType.ALLOWED,
                  registrationEnabled: info.registrationEnabled,
                  name: info.name
                });
                // this.registrationConfig = result[1];
                // this.recoveryFormConfig = result[2];
                // this.loading = result.loading;
                // this.error = result.error;
                resolve(true);
              }, (error) => resolve(true));
          }
        )
        .catch(() => reject());
    });
  }
}
