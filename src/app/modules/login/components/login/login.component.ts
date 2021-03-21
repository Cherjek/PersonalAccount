import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'apollo-angular';
import { LoginFormConfig } from 'src/app/common/models/forms';
import { CustomerAppService } from 'src/app/common/services/customer-app.service';
import { LoginConfigService } from 'src/app/common/services/configuration/login-config.service';
import { TokenAppService } from 'src/app/common/services/token-app.service';
import { GlobalErrorHandler } from 'src/app/core/services/error-handler';
import { AppLocalization } from 'src/app/core/locale';
import { AuthService } from 'src/app/core/services/auth.service';
import { CELoginComponent } from 'src/app/custom-elements/login/login.component';
import { BaseComponent } from 'src/app/modules/shared/base.component';
import { LoginResponse } from './models/login-res.model';
import { LoginService } from './services/login.service';
import { LoginRequest } from './models/login-req.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent 
  extends BaseComponent<CELoginComponent, LoginFormConfig> {

  private $subLoad?: Subscription;

  constructor(
    private globalErrorHandler: GlobalErrorHandler,
    private authService: AuthService,
    private tokenAppService: TokenAppService,
    private customerAppService: CustomerAppService,
    private loginConfigService: LoginConfigService,
    private service: LoginService,
    private router: Router,
    public http: HttpClient,
    public host: ElementRef) {
      super(http, host);
      super.configService = loginConfigService;
      super.elementName = 'login';
  }

  addProperties() {
    
    // Listen to the close event
    this.element.addEventListener('logined', (event) => {
      const _: { data: LoginRequest, stop: () => {} } = (event as any)['detail']; // { login, password }
      this.service
        .login(_.data)
        .subscribe(
          (result: LoginResponse) => {
            if (result.status === 'SUCCESS') {
              this.authService.login(result.customer, result.token);
            } else if (result.status === 'BAD_USER_OR_PASSWORD') {
              this.globalErrorHandler.errorForm = AppLocalization.login.ErrorEnter;
            } else if (result.status === 'BLOCKED') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorUserBlocked;
            } else if (result.status === 'REGISTRATION_NOT_FINISHED') {
              this.globalErrorHandler.errorForm = AppLocalization.login.ErrorRegistrationNotFinished;
            } else if (result.status === 'TOO_MANY_FAILED_ATTEMPTS') {
              this.globalErrorHandler.errorForm = AppLocalization.login.ErrorManyEntered;
            }
            _.stop();
            // this.loading = result.loading;
            // this.error = result.error;
          },
          (error) => { _.stop(); this.globalErrorHandler.errorForm = AppLocalization.common.ErrorServer; }
        );
    });

    // Set the message
    // element.message = message;
  }
}
