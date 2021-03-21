import { TemplateRef } from '@angular/core';
import { DynBaseControl } from 'src/app/dynamics-form-control/models/base-control';

export class BaseFormConfig {
  public title: string;
  public headerText: string;
  public headerTemplate?: TemplateRef<any>;
  public controls?: DynBaseControl<any>[];
  constructor(options: {
    title?: string;
    headerText?: string;
    headerTemplate?: TemplateRef<any>;
    controls?: DynBaseControl<any>[];
  }) {
    this.title = options.title || '';
    this.headerText = options.headerText || '';
    this.headerTemplate = options.headerTemplate;
    this.controls = options.controls;
  }
}
