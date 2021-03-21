export class Attachment {
  content?: string;
  id?: string;
  name?: string;
  path?: string;
  constructor(options: {
    content?: string;
    id?: string;
    name?: string;
    path?: string;
  }) {
    this.id = options.id;
    this.name = options.name;
    this.content = options.content;
    this.path = options.path;
  }
}