import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecoveryFormConfig } from 'src/app/common/models/forms';
import { RecoveryConfigService } from 'src/app/common/services/configuration/recovery-config.service';
import { GlobalErrorHandler } from 'src/app/core/services/error-handler';
import { AppLocalization } from 'src/app/core/locale';
import { CERecoveryComponent } from 'src/app/custom-elements/recovery/recovery.component';
import { BaseComponent } from 'src/app/modules/shared/base.component';
import { RecoveryStatus } from './models/recovery-res.model';
import { RecoveryService } from './services/recovery.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
  providers: [RecoveryService]
})
export class RecoveryComponent extends BaseComponent<CERecoveryComponent, RecoveryFormConfig> {

  constructor(
    private globalErrorHandler: GlobalErrorHandler,
    private recoveryConfigService: RecoveryConfigService,
    private service: RecoveryService,
    private router: Router,
    public http: HttpClient,
    public host: ElementRef) {  
      super(http, host);
      super.configService = recoveryConfigService;
      super.elementName = 'recovery';
  }

  addProperties() {
    
    // Listen to the close event
    this.element.addEventListener('recovered', (event) => {
      const _: { data: any, stop: () => {} } = (event as any)['detail']; // { login, password }
      sessionStorage.setItem('recoveryPhoneNumberOrEmail', JSON.stringify(_));
      this.service
        .recovery(_.data)
        .subscribe(
          (result: RecoveryStatus) => {
            if (result === 'SUCCESS') {
              this.router.navigate(['recovery-confirm']);
            } else if (result === 'CUSTOMER_NOT_FOUND') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorCustomerNotFound;
            } else if (result === 'BLOCKED') {
              this.globalErrorHandler.errorForm = AppLocalization.common.ErrorUserBlocked;
            } else if (result === 'REGISTRATION_NOT_FINISHED') {
              this.globalErrorHandler.errorForm = AppLocalization.login.ErrorRegistrationNotFinished;
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
