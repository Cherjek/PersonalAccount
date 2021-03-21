import { Injectable } from '@angular/core';
import { ApplicationConfig, ApplicationInfo } from '../../models/forms';
import { BaseFormConfig } from '../../models/forms/BaseFormConfig.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  public appInfo?: ApplicationInfo;
  public appConfig?: ApplicationConfig;
  public config: BaseFormConfig = new BaseFormConfig({});
}
