import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HomeFormConfig } from 'src/app/common/models/forms/HomeFormConfig.model';
import { HomeConfirmConfigService } from 'src/app/common/services/configuration/home-confirm-config.service';
import { ApplicationService } from 'src/app/common/services/forms/application.service';
import { createBearerApollo } from 'src/app/core/graphql.module';
import { AppLocalization } from 'src/app/core/locale';
import { AuthService } from 'src/app/core/services/auth.service';
import { CEHomeComponent } from 'src/app/custom-elements/home/home.component';
import { BaseComponent } from 'src/app/modules/shared/base.component';
import { LogoutService } from './services/logout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LogoutService]
})
export class HomeComponent extends BaseComponent<CEHomeComponent, HomeFormConfig> {

  public locale = AppLocalization.home;

  constructor(
    public applicationService: ApplicationService,
    private homeConfirmConfigService: HomeConfirmConfigService,
    private authService: AuthService,
    private logoutService: LogoutService,
    private router: Router,
    private apollo: Apollo,
    private httpLink: HttpLink,
    public http: HttpClient,
    public host: ElementRef
  ) {
    super(http, host);
    super.configService = homeConfirmConfigService;
    super.elementName = 'home';

    apollo
      .client
      .setLink(createBearerApollo(httpLink, authService));
  }

  addProperties() {}

  exit() {
    this.logoutService
      .logout()
      .subscribe(() => {
        this.authService.logout();
      }, (error) => { throw new Error(error); });
  }
}
