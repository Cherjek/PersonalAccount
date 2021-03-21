import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynBaseControl } from '../models/base-control';
import { CustomValidators } from '../models/custom-validators';

//const specCharPatter = ;///[ [!@#$%^&*()_+-=[]{};':"|,.<>/?]/](<mailto:!@#$%^&*()_+-=[]{};':"|,.<>/?]/>);

@Injectable()
export class DynBaseControlService {
  constructor() { }

  toFormGroup(controls: DynBaseControl<string>[] ) {
    const group: any = {};

    controls.forEach(control => {
      group[control.key] = this.getControlType(control);
    });
    return new FormGroup(group);
  }

  getControlType(control: DynBaseControl<string>) {
    const ctrl = new FormControl(control.value || '');
    if (control.type === 'email') {
      ctrl.setValidators(Validators.compose([
        control.required ? Validators.required : null,
        Validators.email
      ]));
    } else if (control.type === 'password') {
      ctrl.setValidators(Validators.compose([
        control.required ? Validators.required : null,
        // check whether the entered password has a number
        control.passOptions && control.passOptions.hasNumber ? 
          CustomValidators.patternValidator(/\d/, { hasNumber: control.passOptions.hasNumber }) : null,
        // check whether the entered password has upper case letter
        control.passOptions && control.passOptions.hasCapitalCase ? 
          CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }) : null,
        // check whether the entered password has a lower-case letter
        control.passOptions && control.passOptions.hasSmallCase ? 
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }) : null,
        // check whether the entered password has a special character
        control.passOptions && control.passOptions.hasSpecialCharacters ? 
          CustomValidators.patternValidator(/[+-_!#$%&?]/, { hasSpecialCharacters: true }) : null,
        // Has a minimum length of 8 characters
        control.passOptions && control.passOptions.minLength ? 
          Validators.minLength(8) : null
      ]));
    } else if (control.required) {
      ctrl.setValidators(Validators.required);
    }
    return ctrl;
  }
}