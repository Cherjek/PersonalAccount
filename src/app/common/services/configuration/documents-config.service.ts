import { Injectable } from '@angular/core';
import { DocumentsConfig } from '../../models/forms/DocumentsConfig.model';
import { IFormConfigService } from './formConfig.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentsConfigService implements IFormConfigService {
  config!: DocumentsConfig;
}
