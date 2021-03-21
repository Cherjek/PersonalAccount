import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationFormConfig } from 'src/app/common/models/forms';
import { Customer } from 'src/app/common/models/services/Customer.model';
import { RegistrationConfigService } from 'src/app/common/services/configuration/registration-config.service';
import { GlobalErrorHandler } from 'src/app/core/services/error-handler';
import { AppLocalization } from 'src/app/core/locale';
import { CERegistrationComponent } from 'src/app/custom-elements/registration/registration.component';
import { BaseComponent } from 'src/app/modules/shared/base.component';
import { RegistrationResponse } from './models/registration-res.model';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [RegistrationService]
})
export class RegistrationComponent extends BaseComponent<CERegistrationComponent, RegistrationFormConfig> {

  constructor(
    private router: Router,
    private globalErrorHandler: GlobalErrorHandler,
    private registrationConfigService: RegistrationConfigService,
    private service: RegistrationService,
    public http: HttpClient,
    public host: ElementRef) {  
      super(http, host);
      super.configService = registrationConfigService;
      super.elementName = 'registration';
  }

  addProperties() {
    
    // Listen to the close event
    this.element.addEventListener('registrated', (event) => {
      const _: { data: Customer, stop: () => {} } = (event as any)['detail']; // { login, password }
      if (!_.data?.email && !_.data?.phoneNumber) {
        _.stop();
        this.globalErrorHandler.errorForm = AppLocalization.registration.ErrorPhoneOrEmail;
        throw new Error(AppLocalization.registration.ErrorPhoneOrEmail);
      }
      _.data.email = _.data.email || '';
      _.data.phoneNumber = _.data.phoneNumber || '';
      this.service
        .registration(_.data)
        .subscribe(
          (result: RegistrationResponse) => {
            if (result.status === 'SUCCESS' || 
              result.status === 'ALREADY_REGISTERED') {
              this.router.navigate([`/registration-confirm/${result.customer?.id}`]);
            } else if (result.status === 'BLOCKED') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorUserBlocked;
            } else if (result.status === 'DISABLED') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorUserDisabled;
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
