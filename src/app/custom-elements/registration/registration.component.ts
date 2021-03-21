import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecoveryFormConfig } from 'src/app/common/models/forms';
import { RegistrationConfigService } from 'src/app/common/services/configuration/registration-config.service';
import { AppLocalization } from 'src/app/core/locale';
import { CustomBaseComponent } from '../base/custom-base.component';
import { FieldsService } from './services/fields.service';

@Component({
  selector: 'app-ce-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [FieldsService]
})
export class CERegistrationComponent 
  extends CustomBaseComponent<any> {

  public locale = AppLocalization.registration;
  public configForm!: RecoveryFormConfig;
  @Output()
  registrated: EventEmitter<{ data: any, stop: () => {} }> = new EventEmitter();

  constructor(
    private registrationConfigService: RegistrationConfigService,
    public fieldsService: FieldsService<any>) {
      super();
      super.submitForm = this.registrated;
      this.configForm = registrationConfigService.config;
  }
}
