import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AppLocalization } from 'src/app/core/locale';

@Component({
  selector: 'pa-combobox',
  templateUrl: './pa-combobox.component.html',
  styleUrls: ['./pa-combobox.component.scss'],
})
export class PaComboboxComponent implements OnInit {
  formControl = new FormControl();
  filteredOptions!: Observable<string[]>;
  private filterOptions: any[] = [];
  private _options: any[] = [];
  @Input()
  public get options(): any[] {
    return this._options;
  }
  public set options(value: any[]) {
    this.filterOptions = value.map((x) => {
      if (typeof x === 'object') {
        const objFilterValue = x[this.filterKey];
        if (!objFilterValue) {
          throw new Error(
            `Specified 'filterKey'(${
              this.filterKey
            }) does not exist for ${JSON.stringify(x)}`
          );
        }
        return objFilterValue;
      }
      return x;
    });
    this._options = value;
  }
  @Input() filterKey = 'Name';
  @Input() placeholder = '';
  @Input() label = AppLocalization.common.Choose;
  private _disabled = false;
  @Input()
  public get disabled() {
    return this._disabled;
  }
  public set disabled(value) {
    if (value) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
    this._disabled = value;
  }

  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() dropdownOpened: EventEmitter<any> = new EventEmitter<any>();
  @Output() dropdownClosed: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map((value) =>
        this.filterOptions.filter(
          (option) =>
            option
              .toString()
              .toLowerCase()
              .indexOf(value.toString().toLowerCase()) === 0
        )
      )
    );
  }
}
