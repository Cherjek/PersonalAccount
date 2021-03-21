export class DocumentStatusType {
  code?: string;
  id?: number;
  name?: string;
  constructor(options: {
    code?: string;
    id?: number;
    name?: string;
  }) {
    this.id = options.id;
    this.name = options.name;
    this.code = options.code;
  }
}