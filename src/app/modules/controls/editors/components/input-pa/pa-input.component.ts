import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

type InputType = 'text' | 'number' | 'password' | 'email' | 'phone';

@Component({
  selector: 'pa-input',
  templateUrl: './pa-input.component.html',
  styleUrls: ['./pa-input.component.scss'],
})
export class PaInputComponent implements OnInit {
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() value!: any;
  @Input() type: InputType = 'text';
  @Input() control: FormControl = new FormControl();
  @Input() required!: any;
  @Input() error!: string;
  private _disabled: any;
  @Input()
  public get disabled() {
    return this._disabled;
  }
  public set disabled(value) {
    if (value) {
      this.control.disable();
    } else {
      this.control.enable();
    }
    this._disabled = value;
  }

  public hidePassword = true;

  constructor() {}

  ngOnInit(): void {}

  test() {
    console.log('clicked');
  }
}
