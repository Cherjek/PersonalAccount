import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[paHotKeys]',
  exportAs: 'paHotKeys'
})
export class HotKeysDirective {

  @Output() keyDown = new EventEmitter();
  @Output() enterDown = new EventEmitter();
  constructor() { }

  @HostListener('document:keydown', ['$event']) onKeyboardPress(
    event: KeyboardEvent
  ) {
    if (event.key === 'Enter') {
      this.enterDown.emit();
    }
    this.keyDown.emit({ event });
  }
}
