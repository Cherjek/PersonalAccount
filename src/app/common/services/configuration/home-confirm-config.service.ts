import { Injectable } from '@angular/core';
import { HomeFormConfig } from '../../models/forms/HomeFormConfig.model';
import { IFormConfigService } from './formConfig.service';

@Injectable({
  providedIn: 'root'
})
export class HomeConfirmConfigService implements IFormConfigService {
  config!: HomeFormConfig;
}
