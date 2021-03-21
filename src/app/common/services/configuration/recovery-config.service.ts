import { Injectable } from '@angular/core';
import { RecoveryFormConfig } from '../../models/forms/RecoveryFormConfig.model';
import { IFormConfigService } from './formConfig.service';

@Injectable({
  providedIn: 'root'
})
export class RecoveryConfigService implements IFormConfigService {
  config!: RecoveryFormConfig;
}
