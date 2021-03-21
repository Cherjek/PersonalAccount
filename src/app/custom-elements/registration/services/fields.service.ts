import { Injectable } from '@angular/core';
import { AppLocalization } from 'src/app/core/locale';
import { DynBaseControl } from 'src/app/dynamics-form-control/models/base-control';
import { IFieldsDynReturn } from 'src/app/dynamics-form-control/models/ifields';

@Injectable()
export class FieldsService<T> implements IFieldsDynReturn<T> {
  getFields(): DynBaseControl<T>[] {
    const items = [
      {
        key: 'firstName',
        label: AppLocalization.registration.PersonName,
        placeholder: AppLocalization.registration.InputPersonName,
        required: true,
        order: 1,
        controlType: 'textbox',
        type: 'string'
      },
      {
        key: 'surname',
        label: AppLocalization.registration.Surname,
        placeholder: AppLocalization.registration.InputSurname,
        required: true,
        order: 2,
        controlType: 'textbox',
        type: 'string'
      },
      {
        key: 'middleName',
        label: AppLocalization.registration.MiddleName,
        placeholder: AppLocalization.registration.InputMiddleName,
        required: false,
        order: 3,
        controlType: 'textbox',
        type: 'string'
      },
      {
        key: 'phoneNumber',
        label: AppLocalization.registration.Phone,
        placeholder: AppLocalization.registration.InputPhone,
        required: false,
        order: 5,
        controlType: 'textbox',
        type: 'phone'
      },
      {
        key: 'email',
        label: AppLocalization.registration.Email,
        placeholder: AppLocalization.registration.InputEmail,
        required: false,
        order: 4,
        controlType: 'textbox',
        type: 'email'
      },
      {
        key: 'password',
        label: AppLocalization.login.Password,
        placeholder: AppLocalization.login.Password,
        required: true,
        order: 6,
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