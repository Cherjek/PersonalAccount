import { Component, EventEmitter, Output } from '@angular/core';
import { RecoveryConfirmFormConfig } from 'src/app/common/models/forms/RecoveryConfirmFormConfig.model';
import { RecoveryConfirmConfigService } from 'src/app/common/services/configuration/recovery-confirm-config.service';
import { AppLocalization } from 'src/app/core/locale';
import { CustomBaseComponent } from '../base/custom-base.component';
import { FieldsService } from './services/fields.service';

@Component({
  selector: 'app-ce-recovery-confirm',
  templateUrl: './recovery-confirm.component.html',
  styleUrls: ['./recovery-confirm.component.scss'],
  providers: [FieldsService]
})
export class CERecoveryConfirmComponent 
  extends CustomBaseComponent<any> {

  public locale = AppLocalization.recovery;
  public configForm!: RecoveryConfirmFormConfig;
  @Output()
  confirmed: EventEmitter<{ data: any, stop: () => {} }> = new EventEmitter();
  
  constructor(
    private recoveryConfigService: RecoveryConfirmConfigService,
    public fieldsService: FieldsService<any>
  ) { 
    super();
    super.submitForm = this.confirmed;
    this.configForm = recoveryConfigService.config;
  }
}
