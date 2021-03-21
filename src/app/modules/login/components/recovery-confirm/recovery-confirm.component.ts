import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecoveryConfirmFormConfig } from 'src/app/common/models/forms/RecoveryConfirmFormConfig.model';
import { RecoveryConfirmConfigService } from 'src/app/common/services/configuration/recovery-confirm-config.service';
import { GlobalErrorHandler } from 'src/app/core/services/error-handler';
import { AppLocalization } from 'src/app/core/locale';
import { CERecoveryConfirmComponent } from 'src/app/custom-elements/recovery-confirm/recovery-confirm.component';
import { BaseComponent } from 'src/app/modules/shared/base.component';
import { RecoveryConfirmResponse } from './models/recovery-res.model';
import { RecoveryService } from './services/recovery.service';

@Component({
  selector: 'app-recovery-confirm',
  templateUrl: './recovery-confirm.component.html',
  styleUrls: ['./recovery-confirm.component.scss'],
  providers: [RecoveryService]
})
export class RecoveryConfirmComponent extends BaseComponent<CERecoveryConfirmComponent, RecoveryConfirmFormConfig> {

  constructor(
    private globalErrorHandler: GlobalErrorHandler,
    private recoveryConfirmConfigService: RecoveryConfirmConfigService,
    private service: RecoveryService,
    private router: Router,
    public http: HttpClient,
    public host: ElementRef) {  
      super(http, host);
      super.configService = recoveryConfirmConfigService;
      super.elementName = 'recovery-confirm';
  }

  addProperties() {
    
    // Listen to the close event
    this.element.addEventListener('confirmed', (event) => {
      const _: { data: any, stop: () => {} } = (event as any)['detail']; // { login, password }
      this.service
        .recovery(_.data)
        .subscribe(
          (result: RecoveryConfirmResponse) => {
            if (result.status === 'SUCCESS') {
              this.router.navigate(['login']);
            } else if (result.status === 'BLOCKED') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorUserBlocked;
              // throw new Error(AppLocalization.common.ErrorUserBlocked);
            } else if (result.status === 'DISABLED') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorUserDisabled;
              // throw new Error(AppLocalization.common.ErrorUserDisabled);
            } else if (result.status === 'BAD_CONFIRMATION_CODE') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorConfirmationCode;
              // throw new Error(AppLocalization.common.ErrorConfirmationCode);
            } else if (result.status === 'CUSTOMER_NOT_FOUND') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorCustomerNotFound;
              // throw new Error(AppLocalization.common.ErrorCustomerNotFound);
            } else if (result.status === 'ALREADY_CONFIRMED') {
              this.globalErrorHandler.errorForm = AppLocalization.registrationConfirm.ErrorAlreadyConfirm;
              // throw new Error(AppLocalization.registrationConfirm.ErrorAlreadyConfirm);
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
