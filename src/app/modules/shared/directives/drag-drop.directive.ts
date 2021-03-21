import {
  Directive,
  Output,
  HostBinding,
  HostListener,
  EventEmitter
} from '@angular/core';

@Directive({ selector: '[paDragDrop]' })
export class DragDropDirective {
  @Output() 
  fileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background = '#f5fcff';
  @HostBinding('style.opacity') private opacity = '1';

  @HostListener('dragover', ['$event']) onDragOver(event: /*DragEvent*/any) {
    this.initDrag(event, { opacity: '0.8' });
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: /*DragEvent*/any) {
    this.initDrag(event, { background: '#f5fcff' });
  }

  @HostListener('drop', ['$event']) onDrop(event: /*DragEvent*/any) {
    this.initDrag(event, { background: '#f5fcff' });
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files.item(0));
    }
  }

  private initDrag(
    event: /*DragEvent*/any,
    { background = '#9ecbec', opacity = '1' } = {}
  ) {
    console.log('dragDropEv');
    event.preventDefault();
    event.stopPropagation();
    this.background = background;
    this.opacity = opacity;
  }
}
