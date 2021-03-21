import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginFormConfig } from 'src/app/common/models/forms';
import { LoginConfigService } from 'src/app/common/services/configuration/login-config.service';
import { AppLocalization } from 'src/app/core/locale';
import { CustomBaseComponent } from '../base/custom-base.component';
import { FieldsService } from './services/fields.service';

@Component({
  selector: 'app-ce-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FieldsService]
})
export class CELoginComponent 
  extends CustomBaseComponent<any> {
    
  public configForm: LoginFormConfig;
  public locale = AppLocalization.login;
  
  @Output() 
  logined: EventEmitter<{ data: any, stop: () => {} }> = new EventEmitter();

  constructor(
    private loginConfigService: LoginConfigService,
    public fieldsService: FieldsService<any>
    ) {
      super();
      super.submitForm = this.logined;
      this.configForm = loginConfigService.config;
  }
}
