export class EquipmentType {
  code?: string;
  displayText?: string;
  name?: string;
  constructor(options: {
    code?: string;
    displayText?: string;
    name?: string;
  }) {
    this.code = options.code;
    this.displayText = options.displayText;
    this.name = options.name;
  }
}