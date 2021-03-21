import { Injectable } from '@angular/core';
import { MeterDevicesConfig } from '../../models/forms/MeterDevicesConfig.model';
import { IFormConfigService } from './formConfig.service';

@Injectable({
  providedIn: 'root'
})
export class MeterDevicesConfigService implements IFormConfigService {
  config!: MeterDevicesConfig;
}
