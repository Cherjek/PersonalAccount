import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pa-link',
  templateUrl: './pa-link.component.html',
  styleUrls: ['./pa-link.component.scss'],
})
export class PaLinkComponent implements OnInit {
  @Input() disabled!: boolean;
  @Input() color = 'primary';

  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onButtonClick(event: any) {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
