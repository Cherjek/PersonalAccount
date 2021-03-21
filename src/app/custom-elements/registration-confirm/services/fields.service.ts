import { Injectable } from '@angular/core';
import { AppLocalization } from 'src/app/core/locale';
import { DynBaseControl } from 'src/app/dynamics-form-control/models/base-control';
import { IFieldsDynReturn } from 'src/app/dynamics-form-control/models/ifields';

@Injectable()
export class FieldsService<T> implements IFieldsDynReturn<T> {
  getFields(): DynBaseControl<T>[] {
    const items = [
      {
        key: 'confirmationCode',
        label: AppLocalization.common.CodeConfirm,
        placeholder: AppLocalization.common.InputCodeConfirm,
        required: true,
        order: 1,
        controlType: 'textbox',
        type: 'string'
      }      
    ];
    return items.sort((a, b) => a.order - b.order) as DynBaseControl<T>[];
  }
}