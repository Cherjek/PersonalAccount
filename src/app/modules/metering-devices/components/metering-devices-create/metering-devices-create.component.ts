import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin, Observable } from 'rxjs';
import { MeterDevicesAppService } from 'src/app/common/services/forms/meter-devices-app.service';
import { AppLocalization } from 'src/app/core/locale';
import { GlobalErrorHandler } from 'src/app/core/services/error-handler';
import { MeterNewReq } from './models/meter-new-req.model';
import { MeterDevicesCreateService } from './services/meter-devices-create.service';

@Component({
  selector: 'pa-metering-devices-create',
  templateUrl: './metering-devices-create.component.html',
  styleUrls: ['./metering-devices-create.component.scss'],
  providers: [MeterDevicesCreateService]
})
export class MeteringDevicesCreateComponent implements OnInit {

  locale = AppLocalization.meterDevices;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private globalErrorHandler: GlobalErrorHandler,
    private meterDevicesCreateService: MeterDevicesCreateService,
    private meterDevicesAppService: MeterDevicesAppService
  ) {}

  ngOnInit(): void {
    const elementName = 'metering-devices-create';
    const element = document.createElement(`${elementName}-element`) as any;

    this.addProperties(element);

    const container = document.querySelector(`[data-element="${elementName}-element"]`);
    if (container) {
      container.appendChild(element);
    }
  }

  private addProperties(element: HTMLElement) {
    element.addEventListener('add', (event) => {
      const _: { data: any | MeterNewReq, stop: () => {} } = (event as any)['detail']; // { login, password }

      const filesObsr = _.data.files?.map((f: File) => {
        return this.readAsText(f);
      });
      if (filesObsr != null && filesObsr.length) {
        forkJoin(filesObsr as Observable<string>[])
          .subscribe(result => {
            const filesMutation = result.map((r, i) => {
              return { name: _.data.files[i].name, content: r };
            });
            _.data.files = filesMutation;
            this.addMeter(_);
          })
      } else {
        this.addMeter(_);
      }
    });
  }  

  private addMeter(_: { data: any | MeterNewReq, stop: () => {} }) {
    this.meterDevicesCreateService
    .add(_.data)
    .subscribe((result) => {
      if (result === 'SUCCESS') {
        this.meterDevicesAppService.success = true;
      } else if (result === 'ERROR') {
        this.globalErrorHandler.errorForm = this.locale.ErrorAddMeter;
      } else if (result === 'FORBIDDEN') {
        this.globalErrorHandler.errorForm = this.locale.ForbidenAddMeter;
      } else if (result === 'PENDING') {
        this.globalErrorHandler.errorForm = this.locale.PendingAddMeter;
      }
      _.stop();
    },
    (error) => { _.stop(); this.globalErrorHandler.errorForm = AppLocalization.common.ErrorServer; });
  }

  private readAsText(file: File): Observable<string> {
    return new Observable((obs) => {
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = (content) => {
        obs.next((content.target as any).result);
        obs.complete();
      };
    });
  }
}
