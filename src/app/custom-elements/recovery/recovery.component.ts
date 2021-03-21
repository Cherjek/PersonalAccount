import { Component, EventEmitter, Output } from '@angular/core';
import { RecoveryFormConfig } from 'src/app/common/models/forms';
import { RecoveryConfigService } from 'src/app/common/services/configuration/recovery-config.service';
import { AppLocalization } from 'src/app/core/locale';
import { CustomBaseComponent } from '../base/custom-base.component';
import { FieldsService } from './services/fields.service';

@Component({
  selector: 'app-ce-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
  providers: [FieldsService]
})
export class CERecoveryComponent 
  extends CustomBaseComponent<any> {

  public locale = AppLocalization.recovery;
  public configForm!: RecoveryFormConfig;
  @Output()
  recovered: EventEmitter<{ data: any, stop: () => {} }> = new EventEmitter();

  constructor(
    private recoveryConfigService: RecoveryConfigService,
    public fieldsService: FieldsService<any>
  ) { 
    super();
    super.submitForm = this.recovered;
    this.configForm = recoveryConfigService.config;
  }
}
