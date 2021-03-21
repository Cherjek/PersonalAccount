import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynBaseControl } from '../models/base-control';
import { DynBaseControlService } from '../services/base-control.service';

export interface ControlsForm {
  [key: string]: FormControl;
}

@Component({
  selector: 'pa-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [ DynBaseControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() controls: DynBaseControl<any>[] = [];
  form!: FormGroup;
  controlsForm: ControlsForm = {};

  constructor(private dcs: DynBaseControlService) {
  }

  ngOnInit(): void {
    this.form = this.dcs.toFormGroup(this.controls);
    Object.keys(this.form.controls || {}).forEach(prop => {
      if (this.form.contains(prop)) {
        this.controlsForm[prop] = this.form.controls[prop] as FormControl;
      }
    });
  }

  getData(): any {
    const result: any = {};
    Object.keys(this.form.controls || {}).forEach(prop => {
      if (this.form.contains(prop)) {
        result[prop] = this.form.controls[prop].value;
      }
    });
    return result;
  }

}
