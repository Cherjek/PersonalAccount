import { Value } from './value.model';

export class Tag {
  code?: string;
  displayText?: string;
  id?: number;
  name?: string;
  valueName?: string;
  value?: Value;


  constructor(options: {
    code?: string;
    displayText?: string;
    id?: number;
    name?: string;
    valueName?: string;
    value?: Value;
  }) {
    this.code = options.code;
    this.displayText = options.displayText;
    this.id = options.id;
    this.name = options.name;
    this.valueName = options.valueName;
    this.value = options.value;
  }
}
