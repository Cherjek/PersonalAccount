import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MeterDevicesAppService } from 'src/app/common/services/forms/meter-devices-app.service';
import { AppLocalization } from 'src/app/core/locale';
import { DynamicFormComponent } from 'src/app/dynamics-form-control/dynamic-form/dynamic-form.component';
import { DynBaseControl } from 'src/app/dynamics-form-control/models/base-control';
import { CustomBaseComponent } from '../base/custom-base.component';
import { FieldsService } from './services/fields.service';

@Component({
  selector: 'app-ce-metering-devices-create',
  templateUrl: './metering-devices-create.component.html',
  styleUrls: ['./metering-devices-create.component.scss'],
  providers: [FieldsService],
})
export class CEMeteringDevicesCreateComponent 
  extends CustomBaseComponent<any> {
  
  public locale = AppLocalization;
  public files?: File[];

  @Output()
  add: EventEmitter<{ data: any, stop: () => {} }> = new EventEmitter();
  
  constructor(
    public meterDevicesAppService: MeterDevicesAppService,
    public fieldsService: FieldsService<any>) {
      super();
      super.submitForm = this.add;
  }

  addEv(): void {
    this.add.next({...this.dynamicForm.getData(), ...{ files: this.files }});
  }

  onFileDropped(file: File) {
    this.files = this.files || [];
    this.files = [...this.files, ...[file]];
  }

  fileBrowseHandler(event: any) {
    const filesList = event?.target?.files as FileList;
    if (filesList.length) {
      this.files = Array.from(filesList);
    }
  }

  removeFile(i: number) {
    this.files?.splice(i, 1);
  }
}
