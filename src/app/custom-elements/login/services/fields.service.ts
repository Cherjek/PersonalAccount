import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AppLocalization } from 'src/app/core/locale';
import { DynBaseControl } from 'src/app/dynamics-form-control/models/base-control';
import { IFieldsDynReturn } from 'src/app/dynamics-form-control/models/ifields';

@Injectable()
export class FieldsService<T> implements IFieldsDynReturn<T> {
  getFields(): DynBaseControl<T>[] {
    const items = [
      {
        key: 'phoneNumberOrEmail',
        label: AppLocalization.login.Login,
        placeholder: AppLocalization.login.InputLogin,
        required: true,
        order: 1,
        controlType: 'textbox',
        type: 'string'
      },
      {
        key: 'password',
        label: AppLocalization.login.Password,
        placeholder: AppLocalization.login.InputPassword,
        required: true,
        order: 2,
        controlType: 'textbox',
        type: 'password'
      }
    ];
    return items.sort((a, b) => a.order - b.order) as DynBaseControl<T>[];
  }
}