import { Injectable } from '@angular/core';
import { LoginFormConfig } from '../../models/forms';
import { IFormConfigService } from './formConfig.service';

@Injectable({
  providedIn: 'root'
})
export class LoginConfigService implements IFormConfigService {
  config!: LoginFormConfig;
}
