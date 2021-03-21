import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { AppLocalization } from 'src/app/core/locale';

@Pipe({
  name: 'validateError'
})
export class ValidateErrorPipe implements PipeTransform {

  transform(value: ValidationErrors, ...args: unknown[]): string | null {
    if (value) {
      return Object.keys(value)
        .map(key => {
          const valid: any = AppLocalization.common.validation;
          if (key === 'minlength') {
            // actualLength: 1
            // requiredLength: 8
            const val = value[key];
            valid[key] = valid[key].replace('{0}', val.requiredLength);
          }
          return `<span>${valid[key]}</span>`;
        }).join('<br>');
    }
    return null;
  }

}
