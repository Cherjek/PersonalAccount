import { Tag } from './tag.model';

export class TagGroup {
  code?: string;
  displayText?: string;
  tags?: Tag[];
  constructor(options: {
    code?: string;
    displayText?: string;
    tags?: Tag[];
  }) {
    this.code = options.code;
    this.displayText = options.displayText;
    this.tags = options.tags;
  }
}
