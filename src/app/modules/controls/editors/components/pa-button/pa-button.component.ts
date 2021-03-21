import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pa-button',
  templateUrl: './pa-button.component.html',
  styleUrls: ['./pa-button.component.scss'],
})
export class PaButtonComponent implements OnInit {
  @Input() disabled!: boolean;
  @Input() color = 'primary';
  @Input() async = false;

  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onButtonClick(event: any) {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
