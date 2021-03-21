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
        key: 'confirmationCode',
        label: AppLocalization.common.CodeConfirm,
        placeholder: AppLocalization.common.InputCodeConfirm,
        required: true,
        order: 2,
        controlType: 'textbox',
        type: 'string'
      },
      {
        key: 'phoneNumberOrEmail',
        label: AppLocalization.recovery.EmailOrPhone,
        placeholder: AppLocalization.recovery.EmailOrPhone,
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
        order: 3,
        controlType: 'textbox',
        type: 'password',
        passOptions: {
          hasNumber: true,
          hasCapitalCase: true,
          hasSmallCase: true,
          hasSpecialCharacters: true,
          minLength: 8
        }
      }
    ];
    return items.sort((a, b) => a.order - b.order) as DynBaseControl<T>[];
  }
}