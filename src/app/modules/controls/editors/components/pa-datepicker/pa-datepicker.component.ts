import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { AppLocalization } from 'src/app/core/locale';
import { RusDateAdapter } from './helpers/RusDateAdapter';
@Component({
  selector: 'pa-datepicker',
  templateUrl: './pa-datepicker.component.html',
  styleUrls: ['./pa-datepicker.component.scss'],
  providers: [{ provide: DateAdapter, useClass: RusDateAdapter }],
})
export class PaDatepickerComponent implements OnInit {
  @Input() dateTitle = AppLocalization.common.ChooseDate;
  @Input() isRange = false;
  @Input() startDateTitle = AppLocalization.common.Start;
  @Input() endDateTitle = AppLocalization.common.End;
  @Input() disabled = false;

  @Input() date = new FormControl(new Date());

  @Input() startDate = new FormControl(new Date());

  @Input() endDate = new FormControl(null);

  @Output() dateEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() startDateEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() endDateEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('ru');
  }

  ngOnInit() {}
}
