import { Injectable } from '@angular/core';
import { RecoveryConfirmFormConfig } from '../../models/forms/RecoveryConfirmFormConfig.model';
import { IFormConfigService } from './formConfig.service';

@Injectable({
  providedIn: 'root'
})
export class RecoveryConfirmConfigService implements IFormConfigService {
  config!: RecoveryConfirmFormConfig;
}
