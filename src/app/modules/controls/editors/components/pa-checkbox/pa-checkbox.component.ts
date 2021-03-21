import { EventEmitter, Output } from '@angular/core';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { CheckboxItem } from '../../../models/checkbox-item';

@Component({
  selector: 'pa-checkbox',
  templateUrl: './pa-checkbox.component.html',
  styleUrls: ['./pa-checkbox.component.scss'],
})
export class PaCheckboxComponent implements OnInit, AfterViewInit {
  @Input() disabled = false;
  @Input() checked = false;
  @Input() indeterminate = false;
  @Input() labelPosition: any = 'after';
  @Input() items: CheckboxItem[] = [];
  @Input() checkboxItemsParentClass = '';
  @Input() checkboxItemClass = '';
  @Input() checkboxTopItemClass = '';
  @Input() topCheckboxDisabled = false;
  @Input() topCheckboxText = 'All';
  @Input() color = 'primary';
  @Output() checkEvent: EventEmitter<any> = new EventEmitter();
  @ViewChild('topCheckbox') topCheckbox!: MatCheckbox;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.topCheckbox) {
      setTimeout(() => {
        this.setTopCheckboxState(this.topCheckbox);
      });
    }
  }

  onCheckChange(
    event: MatCheckboxChange,
    data: { item: CheckboxItem; topCheckbox: MatCheckbox }
  ): void {
    if (data) {
      data.item.IsChecked = event.checked;
      this.setTopCheckboxState(data.topCheckbox);
      this.checkEvent.emit({ event, data: data.item });
    }
  }

  onTopCheckboxChange(event: MatCheckboxChange): void {
    this.items.forEach((item) => {
      item.IsChecked = event.checked;
    });
    this.checkEvent.emit({ event, data: this.topCheckbox });
  }

  private setTopCheckboxState(topCheckboxItem: MatCheckbox): void {
    if (this.items && this.items.length) {
      if (this.items.every((x) => x.IsChecked)) {
        topCheckboxItem.indeterminate = false;
        topCheckboxItem.checked = true;
      } else if (this.items.some((x) => x.IsChecked)) {
        topCheckboxItem.indeterminate = true;
      } else {
        topCheckboxItem.indeterminate = false;
        topCheckboxItem.checked = false;
      }
    }
  }
}
