import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BaseFormConfig } from 'src/app/common/models/forms/BaseFormConfig.model';
import { DynamicFormComponent } from 'src/app/dynamics-form-control/dynamic-form/dynamic-form.component';
import { DynBaseControl } from 'src/app/dynamics-form-control/models/base-control';
import { IFieldsDynReturn } from 'src/app/dynamics-form-control/models/ifields';

@Component({
  template: ''
})
export abstract class CustomBaseComponent<T> implements OnInit {
  
  @Output() submitForm?: EventEmitter<{ data: any, stop: () => {} }>;

  public fieldsService!: IFieldsDynReturn<T>;
  public controls!: DynBaseControl<T>[];
  @ViewChild(DynamicFormComponent) public dynamicForm!: DynamicFormComponent;
  public loading = false;

  constructor() {}

  ngOnInit(): void {
    this.controls = this.fieldsService.getFields();
  }

  enterDown() {
    if (this.dynamicForm.form.valid) {
      this.send();
    } else if (this.dynamicForm.form.invalid) {
      this.dynamicForm.form.markAllAsTouched();
    }
  }

  send(): void {
    this.loading = true;
    this.submitForm?.next({ data: this.dynamicForm.getData(), stop: () => this.loading = false });
  }
}
