import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationFormConfig } from 'src/app/common/models/forms';
import { CustomerAppService } from 'src/app/common/services/customer-app.service';
import { RegistrationConfigService } from 'src/app/common/services/configuration/registration-config.service';
import { TokenAppService } from 'src/app/common/services/token-app.service';
import { GlobalErrorHandler } from 'src/app/core/services/error-handler';
import { AppLocalization } from 'src/app/core/locale';
import { CERegistrationComponent } from 'src/app/custom-elements/registration/registration.component';
import { BaseComponent } from 'src/app/modules/shared/base.component';
import { RegistrationConfirmResponse } from './models/registration-conf-res.model';
import { RegistrationConfirmService } from './services/registration-confirm.service';
import { Customer } from 'src/app/common/models/services/Customer.model';

@Component({
  selector: 'app-registration-confirm',
  templateUrl: './registration-confirm.component.html',
  styleUrls: ['./registration-confirm.component.scss'],
  providers: [RegistrationConfirmService]
})
export class RegistrationConfirmComponent extends BaseComponent<CERegistrationComponent, RegistrationFormConfig> {

  public userId!: number;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private globalErrorHandler: GlobalErrorHandler,
    private registrationConfigService: RegistrationConfigService,
    private tokenAppService: TokenAppService,
    private customerAppService: CustomerAppService,
    private service: RegistrationConfirmService,
    public http: HttpClient,
    public host: ElementRef) {  
      super(http, host);
      super.configService = registrationConfigService;
      super.elementName = 'registration-confirm';
      if (activateRoute.snapshot.params.userId) {
        this.userId = activateRoute.snapshot.params.userId;
      }
  }

  addProperties() {
    
    // Listen to the close event
    this.element.addEventListener('confirm', (event) => {
      const _: { data: Customer, stop: () => {} } = (event as any)['detail']; // { login, password }
      const request = {..._.data, ...{ customerId: this.userId }};
      this.service
        .confirm(request)
        .subscribe(
          (result: RegistrationConfirmResponse) => {
            if (result.status === 'SUCCESS') {
              this.customerAppService.customerApp = result.customer;
              this.tokenAppService.tokenApp = result.token;
              this.router.navigate(['/home/meter-devices']);
            } else if (result.status === 'BLOCKED') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorUserBlocked;
            } else if (result.status === 'DISABLED') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorUserDisabled;
            } else if (result.status === 'BAD_CONFIRMATION_CODE') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorConfirmationCode;
            } else if (result.status === 'CUSTOMER_NOT_FOUND') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorCustomerNotFound;
            } else if (result.status === 'ALREADY_CONFIRMED') {
              this.globalErrorHandler.errorForm = AppLocalization.registrationConfirm.ErrorAlreadyConfirm;
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
