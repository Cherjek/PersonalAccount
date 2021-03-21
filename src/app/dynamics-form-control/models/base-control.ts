import { AppLocalization } from 'src/app/core/locale';

export type ControlType = 'textbox' | 'checkbox';
export type InputType = 'string' | 'number' | 'password' | 'email' | 'phone';
export type PassOptions = { 
  hasNumber: boolean, 
  hasCapitalCase: boolean, 
  hasSmallCase: boolean, 
  hasSpecialCharacters: boolean,
  minLength: number
};

export class DynBaseControl<T> {
  value?: T;
  key: string;
  label: string;
  placeholder: string;
  required?: boolean;
  errorRequiredText?: string;
  order: number;
  controlType?: ControlType;
  type?: InputType;
  passOptions?: PassOptions;
  options?: {key: string, value: string}[];

  constructor(options: {
      value?: T;
      key?: string;
      label?: string;
      placeholder?: string;
      required?: boolean;
      errorRequiredText?: string;
      order?: number;
      controlType?: ControlType;
      type?: InputType;
      passOptions?: PassOptions;
      options?: {key: string, value: string}[];
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.placeholder = options.placeholder || '';
    this.required = !!options.required;
    this.errorRequiredText = options.errorRequiredText || AppLocalization.common.validation.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType;
    this.type = options.type;
    this.passOptions = options.passOptions;
    this.options = options.options || [];
  }
}