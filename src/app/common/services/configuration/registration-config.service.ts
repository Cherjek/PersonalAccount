import { Injectable } from '@angular/core';
import { RecoveryFormConfig } from '../../models/forms';
import { IFormConfigService } from './formConfig.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationConfigService implements IFormConfigService {
  config!: RecoveryFormConfig;
}
