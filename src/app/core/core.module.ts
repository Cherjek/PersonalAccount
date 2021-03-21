import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { AppConfig } from '../app.config';
import { GraphQLModule } from './graphql.module';
import { GlobalErrorHandler } from './services/error-handler';

export function appConfigFactory(config: AppConfig) {
  return () => config.load();
}

@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule,
    GraphQLModule
  ],
  providers: [
    // {
    //   provide: ErrorHandler, 
    //   useClass: GlobalErrorHandler
    // },
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigFactory,
      deps: [AppConfig],
      multi: true,
    },
    // { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
  ],
  declarations: [],
})
export class CoreModule {}
