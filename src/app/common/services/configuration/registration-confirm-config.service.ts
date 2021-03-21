import { Injectable } from '@angular/core';
import { RegistrationConfirmFormConfig } from '../../models/forms/RegistrationConfirmFormConfig.model';
import { IFormConfigService } from './formConfig.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationConfirmConfigService implements IFormConfigService {
  config!: RegistrationConfirmFormConfig;
}
