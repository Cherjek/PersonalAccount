import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrationFormConfig } from 'src/app/common/models/forms';
import { RegistrationConfirmConfigService } from 'src/app/common/services/configuration/registration-confirm-config.service';
import { AppLocalization } from 'src/app/core/locale';
import { DynamicFormComponent } from 'src/app/dynamics-form-control/dynamic-form/dynamic-form.component';
import { DynBaseControl } from 'src/app/dynamics-form-control/models/base-control';
import { CustomBaseComponent } from '../base/custom-base.component';
import { FieldsService } from './services/fields.service';

@Component({
  selector: 'app-ce-registration-confirm',
  templateUrl: './registration-confirm.component.html',
  styleUrls: ['./registration-confirm.component.scss'],
  providers: [FieldsService]
})
export class CERegistrationConfirmComponent 
  extends CustomBaseComponent<any> {

  public locale = AppLocalization.registrationConfirm;
  public configForm!: RegistrationFormConfig;
  @Output()
  confirm: EventEmitter<{ data: any, stop: () => {} }> = new EventEmitter();

  constructor(
    private registrationConfirmConfigService: RegistrationConfirmConfigService,
    public fieldsService: FieldsService<any>) {
      super();
      super.submitForm = this.confirm;
      this.configForm = registrationConfirmConfigService.config;
  }
}
