import { Tag } from './tag.model';

export class TileRow {
  displayText?: string;
  tag?: Tag;
  constructor(options: {
    displayText?: string;
    tag?: Tag;
  }) {
    this.displayText = options.displayText;
    this.tag = options.tag;
  }
}
